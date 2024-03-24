import facebook from "../img/facebook.png";
import gamail from "../img/gmail.png";
import google from "../img/google-maps.png";
import instr from "../img/instagram.png";
import linkdin from "../img/linkedin.png";
import youtube from "../img/youtube.png";

export default function FooterCom() {
  return (
    <div className=" flex flex-col items-center border border-t-8  bg-blue-800 ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="flex gap-40 ml-20 justify-center items-center">
            <div>
              <h1 className="text-white text-lg font-serif">Follow Us: </h1>
              <p className="text-white">dfdfdfdfdfdf</p>
              <p className="text-white">dfdfdfdfdfdf</p>
              <p className="text-white">dfdfdfdfdfdf</p>
            </div>

            <div>
              <h1 className="text-white text-lg font-serif">Follow Us: </h1>
              <p className="text-white">dfdfdfdfdfdf</p>
              <p className="text-white">dfdfdfdfdfdf</p>
            </div>

            <div>
              <h1 className="text-white text-lg font-serif">Follow Us: </h1>
              <p className="text-white">dfdfdfdfdfdf</p>
              <p className="text-white">dfdfdfdfdfdf</p>
              <p className="text-white">dfdfdfdfdfdf</p>
            </div>

            <div>
              <h1 className="text-white text-lg font-serif">Follow Us: </h1>
              <div className="flex gap-2">
                <img src={google} className="w-6 rounded-lg " alt="" />
                <h1 className="text-white gap-2">new one</h1>
              </div>
              <div className="flex gap-2">
                <img src={gamail} className="w-6 rounded-lg " alt="" />
                <h1 className="text-white gap-2">new one</h1>
              </div>
            </div>

            <div>
              <h1 className="text-white text-lg font-serif">Follow Us: </h1>
              <div className="flex gap-6 mt-2">
                <img src={facebook} className="w-8 rounded-lg " alt="" />
                <img src={linkdin} className="w-8 rounded-lg " alt="" />
                <img src={instr} className="w-8 rounded-lg " alt="" />
                <img src={youtube} className="w-8 rounded-lg " alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 text-white">
          <p>@compywirthuviersity.com</p>
        </div>
      </div>
    </div>
  );
}
