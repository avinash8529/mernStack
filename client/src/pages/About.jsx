import React from 'react';
import { useAuth } from "../store/auth";


const About = () => {

    const { user } = useAuth();
    return (
        <div>
            <div class="hero-section">

                <div class="section-center">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-12 text-center">
                                <h1>Hii, {user.username}</h1>
                            </div>
                            <div class="col-12 text-center mb-2">
                                <div class="dancing">photography</div>
                            </div>
                            <div class="col-12 text-center mt-4 mt-lg-5">
                                <p>
                                    <span class="travel hover-target">travel</span>
                                    <span class="wildlife hover-target">wildlife</span>
                                    <span class="nature hover-target">nature</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="about-section">
                <div class="about-close hover-target"></div>
                <div class="section-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 text-center">
                                <img src="http://www.ivang-design.com/svg-load/portfolio/freel.jpg" alt="" />
                            </div>
                            <div class="col-lg-8 text-center mt-4">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                            </div>
                            <div class="col-12 text-center">
                                <p><span>Christian Arete</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact-section">
                <div class="contact-close hover-target"></div>
                <div class="section-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 text-center">
                                <a href="#" class="hover-target">arete@photography.com</a>
                            </div>
                            <div class="col-12 text-center social mt-4">
                                <a href="#" class="hover-target">instagram</a>
                                <a href="#" class="hover-target">flickr</a>
                                <a href="#" class="hover-target">facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="travel-section">
                <div class="travel-close hover-target"></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 text-center">
                            <h3>travel</h3>
                        </div>
                        <div class="col-12 mt-3 text-center">
                            <p><span>Canon PowerShot S95</span></p>
                        </div>
                        <div class="col-12 text-center">
                            <p>
                                focal length: 22.5mm<br>
                                    aperture: ƒ/5.6<br>
                                        exposure time: 1/1000<br>
                                            ISO: 80
                                        </p>
                                    </div>

                                </div>
                        </div>
                    </div>

                    <div class="wildlife-section">
                        <div class="wildlife-close hover-target"></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12 text-center">
                                    <h3>wildlife</h3>
                                </div>
                                <div class="col-12 mt-3 text-center">
                                    <p><span>Canon PowerShot S95</span></p>
                                </div>
                                <div class="col-12 text-center">
                                    <p>
                                        focal length: 22.5mm<br>
                                            aperture: ƒ/5.6<br>
                                                exposure time: 1/1000<br>
                                                    ISO: 80
                                                </p>
                                            </div>

                                        </div>
                                </div>
                            </div>

                            <div class="nature-section">
                                <div class="nature-close hover-target"></div>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-12 text-center">
                                            <h3>nature</h3>
                                        </div>
                                        <div class="col-12 mt-3 text-center">
                                            <p><span>Canon PowerShot S95</span></p>
                                        </div>
                                        <div class="col-12 text-center">
                                            <p>
                                                focal length: 22.5mm<br>
                                                    aperture: ƒ/5.6<br>
                                                        exposure time: 1/1000<br>
                                                            ISO: 80
                                                        </p>
                                                    </div>

                                                </div>
                                        </div>
                                    </div>

                                    <div class='cursor' id="cursor"></div>
                                    <div class='cursor2' id="cursor2"></div>
                                    <div class='cursor3' id="cursor3"></div>

 */}

            {/* <a href="https://front.codes/" class="link-to-portfolio hover-target" target=”_blank”></a> */}
        </div>
    )
}

export default About