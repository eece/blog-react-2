import { useParams } from "react-router-dom";
import classes from "./BlogDetail.module.css";
import authorImage from "../../assets/author.jpg";
import featuredImage from "../../assets/featuredImage.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from 'date-fns';

export function BlogDetail() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  // /api/blog/:id GET 
  // /api/blog   
  useEffect(() => {
    // Fetch the blog data based on the id from the URL
    axios.get(`/api/blog-list.json`)
      .then(response => {
        const blog = response.data.find(blog => blog.slug === id);
        setBlogData(blog);
      })
      .catch(error => {
        console.error('Error fetching blog data:', error);
      });
  }, [id]);

  return (
    <div className="container">
      {blogData && (
        <>
          <div className={classes.blogContainer}>
            <div className={classes.blogMeta}>
              {blogData.categoryName}
            </div>
            <h1>{blogData.title}</h1>
            <div className={classes.bottomBlogMeta}>
              <div className={classes.authorImage}><img src={authorImage} alt="Author" /></div>
              <div>
                <div className={classes.author}>{blogData.author}</div>
                <div className={classes.date}>{format(blogData.date, 'MMMM d, yyyy')}</div>
              </div>
            </div>
          </div>
          <div className={classes.featuredImage}>
            <img src={blogData.featuredImageUrl} alt="" />
          </div>
          <div className={classes.blogContainer}>
            <div dangerouslySetInnerHTML={{ __html: blogData.content }} className={classes.blogContent}></div>
            <div className={classes.bottomTags}>
              {blogData.tags.map((tag, index) => (
                <div key={index} className={classes.bottomTag}>{tag}</div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}