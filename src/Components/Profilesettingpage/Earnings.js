import React from "react";
import "./Profilesettingslide.css";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Featuredvector from "../../Images/Vector.png";
import { Link } from "react-router-dom";
import Navbarnft from "../Navbars/Navbarnft";

import "./Earnings.css";

export default function Profilesettingslide() {
  return (
    <>
      <Navbarnft />
      <div className="container-fluid background-profile-setting"></div>
      <div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-2 col-md-2 col-sm-3 col-3 section-color">
              <div>
                <ul className="listed-section">
                  <span className="setting-sections">Setting</span>
                  <Link to="/profilesetting">
                    <li className="section-list">
                      <span>
                        <PermIdentityOutlinedIcon className="icons-tabs" />
                      </span>{" "}
                      <span className="content-style">Profile</span>
                    </li>
                  </Link>
                  <Link to="/notifications">
                    {" "}
                    <li className="section-list">
                      <span>
                        <NotificationsOutlinedIcon className="icons-tabs" />
                      </span>
                      <span className="content-style">Notifications</span>
                    </li>
                  </Link>
                  <Link to="/featureditems">
                    {" "}
                    <li className="section-list">
                      <span>
                        <img src={Featuredvector} alt="" className="iconsddd" />
                      </span>{" "}
                      <span className="content-style">Featured Items</span>
                    </li>
                  </Link>
                  <Link to="/offers">
                    {" "}
                    <li className="section-list">
                      <span>
                        <LocalOfferOutlinedIcon className="icons-tabs" />
                      </span>
                      <span className="content-style">Offers</span>
                    </li>
                  </Link>
                  <Link to="/accountsupport">
                    {" "}
                    <li className="section-list">
                      <span>
                        <VerifiedUserOutlinedIcon className="icons-tabs" />
                      </span>
                      <span className="content-style">Account support</span>
                    </li>
                  </Link>
                  <Link to="/earnings">
                    {" "}
                    <li className="section-list">
                      <span>
                        <MonetizationOnOutlinedIcon className="icons-tabs" />
                      </span>
                      <span className="content-style">Earnings</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-9 col-9">
              <div className="earning-box">
                <h6 className="earnigs-head">Earnings</h6>
                <p className="earning-content">
                  To access your 2021 Creator Earnings from NFT sales with this
                  wallet using Origins NFT, see below.
                </p>
                <p className="earning-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  condimentum purus non odio <br/>congue, ut consectetur metus
                  malesuada. Integer augue nulla, dignissim at mauris quis,<br/>
                  vehicula vulputate diam.{" "}
                </p>
                <p className="earning-content">
                  Ut vitae nunc porttitor, dictum ex quis, sollicitudin neque.
                  Vestibulum quam neque, tristique at<br/> erat nec, iaculis
                  facilisis lectus. Maecenas pretium malesuada ultricies. Ut
                  porttitor metus ligula,<br/> ac viverra mauris aliquam sit amet.
                </p>
                <div className="button-section990">
                  <p className="earning-content1102">
                    This wallet address does not have any creator earnings from
                    sales using Origins NFT in 2021.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
