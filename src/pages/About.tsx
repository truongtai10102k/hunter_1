import React from "react";
import Main from "../components/Main";
import "../assets/css/pages/about.css";
import ss5 from "../assets/image/ss5.jpg";
import ButtonCommon from "../components/common/ButtonCommon";
import { BsPatchCheckFill } from "react-icons/bs";

const About = () => {
  return (
    <Main>
      <div className="mt-5">
        <AbSession1 />
        <AbSession2 />
        <AbSession3 />
        <AbSession4 />
      </div>
    </Main>
  );
};

export default About;

const AbSession1 = () => {
  return (
    <div className="container">
      <div className="row py-5 g-3 align-items-center">
        <div className="col-12 col-md-6">
          <div
            style={{
              height: "450px",
              width: "100%",
              overflow: "hidden",
              backgroundImage: `url(${ss5})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="row my-3">
            <div className="col-4">
              <div
                style={{
                  height: "150px",
                  width: "100%",
                  overflow: "hidden",
                  backgroundImage: `url(${ss5})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <div className="col-4">
              <div
                style={{
                  height: "150px",
                  width: "100%",
                  overflow: "hidden",
                  backgroundImage: `url(${ss5})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <div className="col-4">
              <div
                style={{
                  height: "150px",
                  width: "100%",
                  overflow: "hidden",
                  backgroundImage: `url(${ss5})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center">
          <h2 className="fw-bold ">GI???I THI???U</h2>
          <div className="session2-line"></div>
          <span
            className="pt-3 pb-2 d-block mx-auto"
            style={{ color: "#303030", maxWidth: "80%" }}
          >
            Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???Lorem Ipsum ch??? ????n
            gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng v??o vi???c tr??nh b??y v?? d??n
            trang ph???c v??? cho in ???n.
          </span>
          <br />
          <h6 style={{ maxWidth: "80%" }} className="d-block mx-auto h6-text">
            Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng v??o vi???c
            tr??nh b??y v?? d??n trang ph???c v??? cho in ???n. Lorem Ipsum ???? ???????c s???
            d???ng nh?? m???t v??n b???n chu???n cho ng??nh c??ng nghi???p in ???n t??? nh???ng n??m
            1500, khi m???t h???a s?? v?? danh gh??p nhi???u ??o???n v??n b???n v???i nhau ????? t???o
            th??nh m???t b???n m???u v??n b???n. ??o???n v??n b???n n??y kh??ng nh???ng ???? t???n t???i
            n??m th??? k???, m?? khi ???????c ??p d???ng v??o tin h???c v??n ph??ng, n???i dung c???a
            n?? v???n kh??ng h??? b??? thay ?????i. N?? ???? ???????c ph??? bi???n trong nh???ng n??m
            1960
          </h6>
          <div className="text-start mx-auto mt-3" style={{ maxWidth: "80%" }}>
            <h3>S??? m???nh c???a ch??ng t??i</h3>
            <div className="my-1">
              <BsPatchCheckFill color="#56B665" /> Cung c???p m???t lo???i d???ch v???
              kh??c nhau cho gia ????nh v?? c??c chuy??n gia
            </div>
            <div className="my-1">
              <BsPatchCheckFill color="#56B665" /> Cung c???p ch???t l?????ng cao v??
              d???ch v??? ph?? h???p
            </div>
            <div className="my-1">
              <BsPatchCheckFill color="#56B665" /> S??? d???ng c??c s???n ph???m l??m s???ch
              th??n thi???n v???i m??i tr?????ng
            </div>
            <div className="my-1">
              <BsPatchCheckFill color="#56B665" /> Cung c???p c??ng vi???c ???n ?????nh
              v???i m???c l????ng c???ng h?????ng
            </div>
            <div className="my-1">
              <BsPatchCheckFill color="#56B665" /> T???p trung ngu???n l???c c???a ch??ng
              t??i v??o vi???c duy tr?? c??c ti??u chu???n
            </div>
            <div className="my-1">
              <BsPatchCheckFill color="#56B665" /> L??m cho b???n m???t kh??ch h??ng
              c???c k??? h??i l??ng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AbSession2 = () => {
  return (
    <div
      style={{
        // height: "450px",
        width: "100%",
        overflow: "hidden",
        backgroundImage: `url(${ss5})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="container h-100 py-5">
        <div className="row h-100 g-3 py-5">
          <div className="col-12 col-md-4">
            <div className="text-center abss2-card">
              <div className="fw-bold py-4">Icon</div>
              <h4 style={{ color: "#111", fontWeight: 500 }}>
                Thanh to??n d??? d??ng
              </h4>
              <div style={{ color: "#303030", fontWeight: 100 }}>
                Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng v??o
                vi???c tr??nh b??y v?? d??n trang ph???c v??? cho in ???n.
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center abss2-card">
              <div className="fw-bold py-4">Icon</div>
              <h4 style={{ color: "#111", fontWeight: 500 }}>
                Thanh to??n d??? d??ng
              </h4>
              <div style={{ color: "#303030", fontWeight: 100 }}>
                Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng v??o
                vi???c tr??nh b??y v?? d??n trang ph???c v??? cho in ???n.
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center abss2-card">
              <div className="fw-bold py-4">Icon</div>
              <h4 style={{ color: "#111", fontWeight: 500 }}>
                Thanh to??n d??? d??ng
              </h4>
              <div style={{ color: "#303030", fontWeight: 100 }}>
                Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng v??o
                vi???c tr??nh b??y v?? d??n trang ph???c v??? cho in ???n.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AbSession3 = () => {
  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-12 col-md-8">
          <div style={{ maxWidth: "90%" }}>
            <h5>Ch??ng t??i quan t??m ?????n c??n nh?? c???a b???n</h5>
            <div className="mt-3 mb-5">
              Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng v??o
              vi???c tr??nh b??y v?? d??n trang ph???c v??? cho in ???n. Lorem Ipsum ???? ???????c
              s??? d???ng nh?? m???t v??n b???n chu???n cho ng??nh c??ng nghi???p in ???n t??? nh???ng
              n??m 1500
            </div>
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div className="fw-bold">Icon</div>
                <div
                  className="my-3"
                  style={{ color: "#111", fontWeight: 500 }}
                >
                  C??NG NGH??? L??M S???CH
                </div>
                <div style={{ color: "#303030", fontWeight: 100 }}>
                  Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng
                  v??o vi???c tr??nh b??y v?? d??n trang ph???c v??? cho in ???n.
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="fw-bold">Icon</div>
                <div
                  className="my-3"
                  style={{ color: "#111", fontWeight: 500 }}
                >
                  C??NG NGH??? L??M S???CH
                </div>
                <div style={{ color: "#303030", fontWeight: 100 }}>
                  Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng
                  v??o vi???c tr??nh b??y v?? d??n trang ph???c v??? cho in ???n.
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="fw-bold">Icon</div>
                <div
                  className="my-3"
                  style={{ color: "#111", fontWeight: 500 }}
                >
                  C??NG NGH??? L??M S???CH
                </div>
                <div style={{ color: "#303030", fontWeight: 100 }}>
                  Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng
                  v??o vi???c tr??nh b??y v?? d??n trang ph???c v??? cho in ???n.
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="fw-bold">Icon</div>
                <div
                  className="my-3"
                  style={{ color: "#111", fontWeight: 500 }}
                >
                  C??NG NGH??? L??M S???CH
                </div>
                <div style={{ color: "#303030", fontWeight: 100 }}>
                  Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng
                  v??o vi???c tr??nh b??y v?? d??n trang ph???c v??? cho in ???n.
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="fw-bold">Icon</div>
                <div
                  className="my-3"
                  style={{ color: "#111", fontWeight: 500 }}
                >
                  C??NG NGH??? L??M S???CH
                </div>
                <div style={{ color: "#303030", fontWeight: 100 }}>
                  Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng
                  v??o vi???c tr??nh b??y v?? d??n trang ph???c v??? cho in ???n.
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="fw-bold">Icon</div>
                <div
                  className="my-3"
                  style={{ color: "#111", fontWeight: 500 }}
                >
                  C??NG NGH??? L??M S???CH
                </div>
                <div style={{ color: "#303030", fontWeight: 100 }}>
                  Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng
                  v??o vi???c tr??nh b??y v?? d??n trang ph???c v??? cho in ???n.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div
            className="my-3"
            style={{
              height: "50%",
              minHeight: "300px",
              width: "100%",
              overflow: "hidden",
              backgroundImage: `url(${ss5})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              position: "relative",
            }}
          >
            {" "}
            <div
              // style={{ height: "250px" }}
              className="ss7-card-over  d-block"
            >
              <div className=" h-100 text-center d-flex align-items-center justify-content-center text-white ">
                <div>
                  <div>D???n d???p nh??</div>
                  <button className="ss7-btn px-4 py-2 mt-3">Click me</button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              height: "50%",
              minHeight: "300px",
              width: "100%",
              overflow: "hidden",
              backgroundImage: `url(${ss5})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              backgroundPosition: "bottom",
            }}
          >
            {" "}
            <div
              // style={{ height: "250px" }}
              className="ss7-card-over d-block"
            >
              <div className=" h-100 text-center d-flex align-items-center justify-content-center text-white ">
                <div>
                  <div>D???n d???p nh??</div>
                  <button className="ss7-btn px-4 py-2 mt-3">Click me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AbSession4 = () => {
  return (
    <div className="AbSession4 py-5">
      <div className="container">
        <div className="row g-5 ">
          <div className="col-12 col-md-6">
            <h4 className="mb-5">C??c th????ng hi???u li??n k???t</h4>
            <div className="row g-3">
              <div className="col-12 col-md-4">
                <div className="box-image py-3">
                  <img
                    width="100%"
                    src="http://mauweb.monamedia.net/cleanmate/wp-content/uploads/2019/11/logo_03-1.png"
                    className="gt-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="box-image py-3">
                  <img
                    width="100%"
                    src="http://mauweb.monamedia.net/cleanmate/wp-content/uploads/2019/11/logo_03-1.png"
                    className="gt-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="box-image py-3">
                  <img
                    width="100%"
                    src="http://mauweb.monamedia.net/cleanmate/wp-content/uploads/2019/11/logo_03-1.png"
                    className="gt-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="box-image py-3">
                  <img
                    width="100%"
                    src="http://mauweb.monamedia.net/cleanmate/wp-content/uploads/2019/11/logo_03-1.png"
                    className="gt-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="box-image py-3">
                  <img
                    width="100%"
                    src="http://mauweb.monamedia.net/cleanmate/wp-content/uploads/2019/11/logo_03-1.png"
                    className="gt-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="box-image py-3">
                  <img
                    width="100%"
                    src="http://mauweb.monamedia.net/cleanmate/wp-content/uploads/2019/11/logo_03-1.png"
                    className="gt-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h4 className="mb-5">C??c th????ng hi???u li??n k???t</h4>
            <div className=" bg-white">
              <div className="py-4 px-3 position-relative">
                Lorem Ipsum ch??? ????n gi???n l?? m???t ??o???n v??n b???n gi???Lorem Ipsum ch???
                ????n gi???n l?? m???t ??o???n v??n b???n gi???, ???????c d??ng v??o vi???c tr??nh b??y
                v?? d??n trang ph???c v??? cho in ???n. khi m???t h???a s?? v?? danh gh??p
                nhi???u ??o???n v??n b???n v???i nhau ????? t???o th??nh m???t b???n m???u v??n b???n.
                ??o???n v??n b???n n??y kh??ng nh???ng ???? t???n t???i n??m th??? k???, m?? khi ???????c
                ??p d???ng v??o tin h???c v??n ph??ng, n???i dung c???a n?? v???n kh??ng h??? b???
                thay ?????i. N?? ???? ???????c ph??? bi???n trong nh???ng n??m 1960 nh??? vi???c b??n
                nh???ng b???n gi???y Letraset in nh???ng ??o???n Lorem Ipsum, v?? g???n ????y
                h??n
              </div>
            </div>
            <div className="AbSession4-text text-black pt-4 ps-4 fw-bold position-relative">
              Tr???n Nh???t T??n -Nh?? l?? villa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
