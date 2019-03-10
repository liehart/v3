import React, { Component } from "react";
import rawdata from "./data.json";
import "./style.scss";
import TextLoop from "react-text-loop";
import {Helmet} from "react-helmet";
import { SocialIcon } from 'react-social-icons';

class App extends Component {
	render() {
		const data = rawdata;
		return (
			<>
			    <Helmet>
                <meta charSet="utf-8" />
                <title>Vriyas Hartama</title>
                <link rel="canonical" href="http://vriyas.com/" />
				<meta name="description" content="Vriyas Hartama's Stuff" />
            </Helmet>
				<section className="section hero-w">
					<div className="container">
					<div className="typeloop">
						<TextLoop interval={1000}>
							<span className="span-loop">こんにちは</span>
							<span className="span-loop">Hello</span>
							<span className="span-loop">안녕하세요</span>
							<span className="span-loop">你好</span>
							<span className="span-loop">Ciao</span>
						</TextLoop>&nbsp;
                <p className="span-fix"><strong>I'm</strong> Vriyas <strong>Hartama</strong></p>
					</div>
					<SocialIcon className="socialicon" style={{ height: 35, width: 35 }} url="http://linkedin.com/in/vriyas-hartama" />
					<SocialIcon className="socialicon" style={{ height: 35, width: 35 }} url="http://instagram.com/hartamaputra" />
					<SocialIcon className="socialicon" style={{ height: 35, width: 35 }} url="http://github.com/haruute0" />
					</div>
				</section>
				<section className="section">
					<div className="container">
						<div className="projects-w">
							<p className="title">About Me</p>
						</div>
						<div className="about-me">
							<p>
								Hello there, Vriyas Hartama here. <span role="img">😊</span>
							</p>
							<p>
								I'm a software developer currently pursuing my Engineering of Informatics degree at <a href="https://uajy.ac.id">University</a>. Beside it I also a open source-er in my spare time.

					</p>

							<p>
								<strong>2018 was a greatest year of my life, Why?</strong>
							</p><p>
								Absolutely, I've a chance to step on Google HQ in California. What?! How come? Read the story <a href="https://github.com/haruute0/v2/blob/master/content/blog/google-code-in-experience-with-metabrainz-foundation">here</a>.
					</p>
							<p>
								<strong>What did i like?</strong>
							</p><p>
								I'd like do build something with Python. Really, Python was fun. You could check my <a href="https://github.com/haruute0/">GitHub</a> or find out my <a href="#projects">projects page</a>.
					</p>
							<p>
								<strong>Anything you else want to hear?</strong>
							</p><p>
								Surely, please drop an <a href="mailto:vriyashartama@gmail.com">email</a> and I'll answer as soon as possible.
					</p>
						</div>
					</div>
				</section>
				<section className="section" id="projects">
					<div className="container">
						<div className="projects-w">
							<p className="title">Projects</p>
							<p>The list below was the projects I've done.</p>
						</div>
						<div className="columns columns-w is-desktop is-centered">
							{Object.keys(data).map((e, i) => {
								return (
									<>
										{data[e].map((v, k) => {
											return (
												<div className="column column-w is-one-third">
													{v.date}
													<p class="title is-4">{v.name}</p>
													<p>{v.description}</p>
													<p>&nbsp;</p>
													<div class="tags">
														{v.tags.map((y) => {
															return (
																<span class="tag">
																	{y}
																</span>
															)
														})}
													</div>
													<a class="button" href={v.projUrl}>Project Website</a>
												</div>
											);
										})}
									</>
								);
							})}
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container">
						<div className="has-text-centered">
							<p>
								Made with
                        		<span> ❤ </span>
								by <strong>
									<a
										href="https://vriyas.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<strong>Vriyas Hartama</strong></a
									></strong>. &copy; 2019

                    </p>
						</div>
					</div>
				</section>
			</>
		)
	}
};

export default App;
