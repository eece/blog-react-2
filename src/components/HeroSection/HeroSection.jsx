import classes from "./HeroSection.module.css";
import heroImg from '../../assets/heroImage.jpg';

export function HeroSection() {
    return (
        <section className={classes.heroSection}>
            <div className={`text-align-center container ${classes.container}`}>
                <div className={classes.topContent}>
                    <h1>Modern Düşünceler</h1>
                    <p className={classes.heroDescription}>
                        A sanctuary for intentional living, minimalist aesthetics, and the pursuit of digital clarity. We explore the intersection of design and the human experience.
                    </p>
                </div>
                <img src={heroImg} alt="Hero" className={classes.heroImage} />
            </div>
        </section>
    );
}