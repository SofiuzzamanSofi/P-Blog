import { FC } from 'react';

interface pageProps {

};

const page: FC<pageProps> = ({ }) => {
    return (
        <div id="left-aside-wrapper">
            <aside id="left-aside">
                <div id="profile-card">
                    <div id="background"></div>
                    <div id="profile-info">
                        <img
                            src="/images/picture.jpeg"
                            alt="Profile picture"
                        />
                        <strong id="profile-name"
                        >Maurício Mendes Rossi</strong
                        >
                        <small>Front-End Developer</small>
                    </div>
                    <div id="profile-links">
                        <a href="#">
                            <span>
                                Who's viewed your profile
                            </span>
                            <span className="profile-number">
                                102
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                Connections
                            </span>
                            <span className="profile-number">
                                452
                            </span>
                        </a>
                    </div>
                    <span>Grow your network</span>
                    <a href="#">
                        <span>Access exclusive tools & insights</span>
                        <span id="profile-premium">
                            <span id="profile-square">■</span> Try Premium
                            Free for 1 Month
                        </span>
                    </a>
                </div>
                <div id="profile-groups">
                    <section>
                        <header

                        >
                            <span>Recent</span>
                            <span
                                className="fas fa-angle-up"

                            ></span>
                        </header>
                        <ul className="group-list">
                            <li>
                                <span className="fas fa-users"></span>
                                <span>React Developers</span>
                            </li>
                            <li>
                                <span className="fas fa-hashtag"></span>
                                <span>javascript</span>
                            </li>
                            <li>
                                <span className="fas fa-hashtag"></span>
                                <span>webdevelopment</span>
                            </li>
                            <li>
                                <span className="fas fa-users"></span>
                                <span>Javascript Brasil</span>
                            </li>
                            <li>
                                <span className="fas fa-users"></span>
                                <span>Dog Lovers</span>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <header

                        >
                            <span className="group-title">Groups</span>
                            <span
                                className="fas fa-angle-up"

                            ></span>
                        </header>
                        <ul>
                            <li>
                                <span className="fas fa-users"></span>
                                <span id="aaaa">React Developers</span>
                            </li>
                            <li>
                                <span className="fas fa-users"></span>
                                <span>Javascript Brasil</span>
                            </li>
                            <li>
                                <span className="fas fa-users"></span>
                                <span>Dog Lovers</span>
                            </li>
                        </ul>
                        <div className="group-list">
                            <a href="#">See all</a>
                        </div>
                    </section>
                    <section>
                        <header


                        >
                            <span className="group-title">
                                Followed Hashtags
                            </span>
                            <span
                                className="fas fa-angle-up"

                            ></span>
                        </header>
                        <ul>
                            <li>
                                <span className="fas fa-hashtag"></span>
                                <span>javascript</span>
                            </li>
                            <li>
                                <span className="fas fa-hashtag"></span>
                                <span>webdevelopment</span>
                            </li>
                        </ul>
                        <a href="#">See all</a>
                    </section>
                    <a href="#">Discover more</a>
                </div>
            </aside>
        </div>
    );
};

export default page;