import classes from './Subscribe.module.css';
import { useState } from 'react';

export function Subscribe() {
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you can add your logic to handle the form submission, e.g., sending the data to a server.
    }

    return (
        <div className={classes.subscribe}>
            <h2>Weekly Newsletter</h2>
            <p>Join our community of subscribers and stay updated with the latest news and updates!</p>
            <form className={classes.form} onSubmit={handleSubmit}>
                <input type="email"
                    placeholder="Enter your email"
                    name="email" value={formData.email}
                    onChange={handleChange} />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}