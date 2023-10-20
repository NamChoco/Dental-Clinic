import dental1 from "./dental1.jpg";
import dental2 from "./dental2.jpg";
import dental3 from "./dental3.jpg";
import dental4 from "./dental4.jpg";

import './mainCSS.css';
function Main() {
   
    return (
        <>
            <div>
                <div className="content1">
                    <section className="wrapper">
                        <i className="fa-solid fa-arrow-left button" id="prev"></i>
                        <div className="image-container">
                            <div className="carousel">
                                <img src={dental2} alt="" />
                            </div>
                            <i className="fa-solid fa-arrow-right button" id="next"></i>
                        </div>
                    </section>
                </div>
                <div className="content2">
                    <div className="wrapper2">
                            <div className="dataDental1">
                                <img src={dental3} alt="" />
                            </div>
                            <div className="dataDental2">
                                <div className="topic-dental2">
                                    <h2>Komsan Dental Clinic</h2>
                                </div>
                                <div className="paragraph-dental2">
                                    <p>คลินิกทันตกรรมคอสเดนท์ ทันตกรรมเพื่อความสวยงาม (Cosmetic Dentistry) และการดูแลรักษาฟันครบวงจร 
                                        โดยทีมทันตแพทย์เฉพาะทาง พร้อมทีมชำนาญการ พร้อมอุปกรณ์และเทคโนโลยีที่ทันสมัย
                                        <br />
                                        <br />
                                        โดยประเภทการรักษา ซึ่งในด้านความสวยงาม ขอยกตัวอย่างดังนี้</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main

