import { useState } from "react";
import classes from "./Categories.module.css";
import { useEffect } from "react";
import axios from "axios";
import { BlogItem } from "../BlogItem/BlogItem";

export function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('/api/categories.json')
            .then(response => {
                setCategories(response.data);
            });

        axios.get('/api/blog-list.json')
            .then(response => {
                console.log('Fetched blogs:', response.data);
                setBlogs(response.data);
            });
    }, []);

    useEffect(() => {
        axios.get('/api/blog-list.json')
            .then(response => {
                console.log('Fetched blogs:', response.data);
                if (activeCategory) { // herhangi bir kategori seçili ise
                    const filteredBlogs = response.data.filter(blog => blog.categorySlug === activeCategory);
                    setBlogs(filteredBlogs);
                } else {
                    setBlogs(response.data);
                }
            });
    }, [activeCategory]);


    return <div className="container-small">
        <h1>Categories</h1>
        <div className={classes.categories}>
            <button
                className={`${classes.category} ${activeCategory === null ? classes.active : ''}`}
                onClick={() => setActiveCategory(null)}>All</button>
            {categories.map((category, index) => (
                <button
                    key={index}
                    className={`${classes.category} ${activeCategory === category.slug ? classes.active : ''}`}
                    onClick={() => setActiveCategory(category.slug)}
                >
                    {category.name}
                </button>
            ))}
        </div>
        <div className={classes.blogs}>
            {blogs.map((blog, index) => <BlogItem key={index} blog={blog} />)}
        </div>
    </div>
}