import { NavLink } from "react-router-dom";
import classes from "./BlogItem.module.css";
import { format } from 'date-fns';

export function BlogItem({ blog }) {
    return <div className={classes.blog} key={blog.slug}>
        <div className={classes.blogImage}>
            <NavLink to={`/blog/${blog.slug}`}>
                <img src={blog.featuredImageUrl} alt={blog.title} />
            </NavLink>
        </div>
        <div className={classes.blogContent}>
            <div className={classes.blogMeta}>
                <span>{blog.categoryName}</span>
                <span>{format(new Date(blog.date), 'MMMM d, yyyy')}</span>
            </div>
            <h2>{blog.title}</h2>
            <p>{blog.excerpt}</p>
            <NavLink to={`/blog/${blog.slug}`}>Read More</NavLink>
        </div>
    </div>
}