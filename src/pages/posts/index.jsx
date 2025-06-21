import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "../../components/ui/Container";
import {Typo} from "../../components/ui/Typo";
import {Posts} from "../../components/Posts";
import {Modal} from "../../components/ui/Modal";
import {Loader} from "../../components/ui/Loader";
import {Pagination} from "../../components/ui/Pagination";
import {getPosts} from "../../redux/slices/postsSlice";
import {Filter} from "../../components/ui/Filter";
import {Message} from "../../components/ui/Message";

export const PostsPage = () => {
    const {list, loading} = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();

    const [activePostPage, setActivePostPage] = useState("1");
    const [searchValue, setSearchValue] = useState("");
    const [sortValue, setSortValue] = useState("");

    useEffect(() => {
        if (!list) {
            dispatch(getPosts());
        }
    }, [list, dispatch]);

    if (!list && loading) {
        return (
            <Container>
                <Modal>
                    <Loader />
                </Modal>
            </Container>
        );
    }

    if (!list) {
        return <>404</>;
    }

    let filteredList = list;

    if (searchValue) {
        filteredList = filteredList.filter((post) =>
            post.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

    if (sortValue && filteredList.length > 0) {
        filteredList = [...filteredList].sort((a, b) => {
            if (sortValue === "asc") {
                if (a.title > b.title) return 1;
                if (a.title === b.title) return 0;
                if (a.title < b.title) return -1;
            }

            if (a.title > b.title) return -1;
            if (a.title === b.title) return 0;
            if (a.title < b.title) return 1;
        });
    }

    const postsOfOnePage = 10;
    const postsPageCount = Math.ceil(filteredList.length / postsOfOnePage);
    const pagesPosts = [];

    for (let i = 0; i < postsPageCount; i++) {
        let page = [];
        for (let j = i * postsOfOnePage; j < (i + 1) * postsOfOnePage; j++) {
            page.push(filteredList[j]);
        }
        pagesPosts.push(page);
    }

    return (
        <Container>
            <Typo>Публикации</Typo>
            <Filter
                setSortValue={setSortValue}
                activePostPage={activePostPage}
                setActivePostPage={setActivePostPage}
                setSearchValue={setSearchValue}
            />
            {searchValue && (
                <Message>{filteredList.length} результатов</Message>
            )}
            <Posts posts={pagesPosts[Number(activePostPage) - 1]} />
            {filteredList.length !== 0 && (
                <Pagination
                    setActivePostPage={setActivePostPage}
                    postsPageCount={postsPageCount}
                    activePostPage={activePostPage}
                />
            )}
        </Container>
    );
};
