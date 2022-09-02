import React from "react";
import { NavLink } from "react-router-dom";

function DealersHighlight() {
  return (
    <div className="text-xs">
      <ul className="flex justify-between py-7  uppercase">
        <li className="text-2xl font-light text-gray-500">
          Top rated <span className="font-bold text-neutral-800">dealers</span>
        </li>
      </ul>
      <ul className="flex gap-4">
        <li className="flex flex-row  text-yellow-500">
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
        </li>
        <li>
          <NavLink to="profile" className="hover:text-blue-800">
            Michael Lenon
          </NavLink>{" "}
          <cite>- Mazda 6</cite>{" "}
        </li>
      </ul>

      <ul className="flex gap-4">
        <li className="flex flex-row  text-yellow-500">
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
        </li>
        <li>
          <NavLink to="profile" className="hover:text-blue-800">
            Michael Lenon
          </NavLink>{" "}
          <cite>- Mazda 6</cite>{" "}
        </li>
      </ul>

      <ul className="flex gap-4">
        <li className="flex flex-row  text-yellow-500">
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
        </li>
        <li>
          <NavLink to="profile" className="hover:text-blue-800">
            Michael Lenon
          </NavLink>{" "}
          <cite>- Mazda 6</cite>{" "}
        </li>
      </ul>

      <ul className="flex gap-4">
        <li className="flex flex-row  text-yellow-500">
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
        </li>
        <li>
          <NavLink to="profile" className="hover:text-blue-800">
            Michael Lenon
          </NavLink>{" "}
          <cite>- Mazda 6</cite>{" "}
        </li>
      </ul>

      <ul className="flex gap-4">
        <li className="flex flex-row  text-yellow-500">
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
        </li>
        <li>
          <NavLink to="profile" className="hover:text-blue-800">
            Michael Lenon
          </NavLink>{" "}
          <cite>- Mazda 6</cite>{" "}
        </li>
      </ul>

      <ul className="flex gap-4">
        <li className="flex flex-row  text-yellow-500">
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
        </li>
        <li>
          <NavLink to="profile" className="hover:text-blue-800">
            Michael Lenon
          </NavLink>{" "}
          <cite>- Mazda 6</cite>{" "}
        </li>
      </ul>
    </div>
  );
}

export default DealersHighlight;
