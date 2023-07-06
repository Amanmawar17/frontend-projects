import { Link } from "react-router-dom";

import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className="grid grid-cols-3 gap-3 grid-flow-row max-md:grid-cols-2">
      {props.details.map((value) => {
        return (
          <div className="flex justify-evenly px-4 my-3" key={value.id}>
            <div className="max-w-xs rounded overflow-hidden shadow-2xl">
              <img
                className="w-full object-cover h-48"
                src={value.img}
                alt={value.title + " " + "image"}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <h2 className="hover:text-2xl pointer-link">{value.title}</h2>
                  <ul className="flex">
                    <li >
                      <Link to={value.code}>
                        <FaGithub />
                      </Link>
                    </li>
                    <li className="ml-2">
                      <Link to={value.preview}>
                        <BsGlobe />
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-400 text-base">{value.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
