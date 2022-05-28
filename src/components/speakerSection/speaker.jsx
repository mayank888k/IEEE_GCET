import React from "react";
import "./speaker.css";
import img1 from './speakerImgs/prof.-dr.-s.n.-singh.jpg';
import img2 from './speakerImgs/prof.-dr.-rajiv-saxena-vice-chancellor-jaypee-university-anoopshahr.jpg';
import img3 from './speakerImgs/prof.-dr.-deepak-garg.jpg';
import img4 from './speakerImgs/prof.-dr.-siddhaling-urolagin.jpg';
import img5 from './speakerImgs/prof.-dr.-celestine-iwendi.jpg';
import img6 from './speakerImgs/prof.-dr.-satish-k.-singh.jpg';
import img7 from './speakerImgs/prof.-dr.-asheesh-k.-singh-1.jpg';
import img8 from './speakerImgs/prof.-dr.-prabhakar-tiwari-mmmut-gorakhpur-secretary-ieee-u.p.-section.-2.jpg';
import img9 from './speakerImgs/dr.-malay-kishore-dutta-dean-pg-studies-and-research-aktu-lucknow.jpg';
import img10 from './speakerImgs/prof.-dr.-neetesh-purohit-indian-institute-of-information-technology-allahabad-iiita-prayagraj-up.jpg';
import img11 from './speakerImgs/prof.-dr.-n.-badal-hod-cse-department-knit-sultanpur.jpg';
import img12 from './speakerImgs/j-ramkumar.jpg';


const Speakers = () => {
    document.title = "Speakers | ICAC3N - 4th IEEE International Conference on Advances in Computing, Communication Control and Networking";
  return (
    <div className="speaker">
        <div className="matter">
            <h1 className="heading">Speakers</h1>

            <figure>
                <img src={img1} alt="img1"/>
                <figcaption> 
                    <strong> Prof. (Dr.) Sri Niwas Singh </strong> 
                    <br/> 
                    Professor (HAG), Department of EE, IIT Kanpur, India / Chairman, India Council, IEEE India.
                </figcaption>
            </figure>

            <figure>
                <img style={{height:"200px", width:"180px"}} src={img12} alt="img12"/>
                <figcaption> 
                    <strong> Prof. (Dr.) J Ramkumar </strong> 
                    <br/> 
                    Professor, IIT Kanpur India, Ex Chair of IEEE UP
                </figcaption>
            </figure>

            <figure>
                <img src={img2} alt="img1"/>
                <figcaption> 
                    <strong> Prof. (Dr.) Rajiv Saxena </strong> 
                    <br/> 
                    Vice Chancellor, Jaypee University, Anoopshahr.
                </figcaption>
            </figure>
            
            <figure>
                <img src={img3} alt="img1"/>
                <figcaption> 
                    <strong> Prof. (Dr.) Deepak Garg </strong> 
                    <br/> 
                    Director leadingindia.ai and Head
                    CSE, Bennett University and Director, 
                    NVIDIA-Bennett Centre of Research on AI.
                </figcaption>
            </figure>
            
            <figure>
                <img src={img4} alt="img1"/>
                <figcaption> 
                    <strong> Prof. (Dr.) Siddhaling Urolagin </strong> 
                    <br/> 
                    Department of Computer Science, Birla Institute of Technology & Science, Pilani, Dubai International Academic City.
                </figcaption>
            </figure>
            
            <figure>
                <img src={img5} alt="img1"/>
                <figcaption> 
                    <strong> Prof. (Dr.) Celestine Iwendi </strong> 
                    <br/> 
                    School of Creative Technologies, University of Bolton, United Kingdom / Board Member IEEE Sweden Section.
                </figcaption>
            </figure>
            
            <figure>
                <img src={img6} alt="img1"/>
                <figcaption> 
                    <strong> Prof. (Dr.) Satish K. Singh </strong> 
                    <br/> 
                    IIIT Allahabad / Section Chair, IEEE UP Section.
                </figcaption>
            </figure>
            
            <figure>
                <img src={img7} alt="img1"/>
                <figcaption> 
                    <strong> Prof. (Dr.) Asheesh K. Singh </strong> 
                    <br/> 
                    Professor EE Department, MNNIT, Allahabad / Immediate Past Section Chair, IEEE UP Section.
                </figcaption>
            </figure>
            
            <figure>
                <img src={img8} alt="img1"/>
                <figcaption> 
                    <strong> Prof. (Dr.) Prabhakar Tiwari </strong> 
                    <br/> 
                    MMMUT, Gorakhpur/ Secretary, IEEE U.P. Section.
                </figcaption>
            </figure>
            
            <figure>
                <img src={img9} alt="img1"/>
                <figcaption> 
                    <strong> Prof. (Dr.) Malay Kishore Dutta </strong> 
                    <br/> 
                    Director, Dean PG studies and Research, Dr. A.P.J. Abdul Kalam Technical University, Lucknow.
                </figcaption>
            </figure>
            
            <figure>
                <img src={img10} alt="img1"/>
                <figcaption> 
                    <strong> Prof. (Dr.) Neetesh Purohit </strong> 
                    <br/> 
                    Indian Institute of Information Technology, Allahabad (IIITA), Prayagraj, UP.
                </figcaption>
            </figure>
            
            <figure>
                <img src={img11} alt="img1"/>
                <figcaption> 
                    <strong> Prof. (Dr.) N. Badal </strong> 
                    <br/> 
                    Director, REC, Bijnor (U.P.), India.
                </figcaption>
            </figure>

        </div>
    </div>
  );
};

export default Speakers;
