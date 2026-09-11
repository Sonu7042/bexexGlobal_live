import { useEffect, useRef, useState } from "react";
import "../../Css/service1.css";
import { HeadingComponent } from "../Buttons.jsx";
import servicesCardData from "../../dataStore/serviceData.js";
import { CiSearch } from "react-icons/ci";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";


const Service1 = () => {
   const { serviceName } = useParams();
  const dropdownRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(null);

  /* ---------------- DROPDOWN OPTIONS ---------------- */
  const firstFilterDropdownOptions = [
    "Select",
    "Consulting",
    "Auditing",
    "Training",
    "Software Solution",
  ];

  const secondfilterDropdownOptions = [
    "Select",
    "Quality & Business Excellence",
    "Management Systems and Compliance",
    "ESG and Sustainability Services",
    "Software & Digital Solutions",
    "Training & Competency Development",
    "Environment, Health & Safety Solutions",
  ];

  /* ---------------- STATE ---------------- */
  const [selectedFirstFilterValue, setselectedFirstFilterValue] =
    useState("Select");
  const [selectedSecondFilterValue, setselectedSecondFilterValue] =
    useState("Select");

  // result after FIRST filter (or serviceName)
  const [firstFilteredData, setFirstFilteredData] =
    useState(servicesCardData);

  // final render data (after second filter / search)
  const [filteredData, setFilteredData] =
    useState(servicesCardData);

  const [searchText, setSearchText] = useState("");

  /* ---------------- OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);




  /* ---------------- AUTO FILTER FROM serviceName ---------------- */
  useEffect(() => {
  if (!serviceName) return;

  // Filter cards by service title
  const data = servicesCardData.filter(
    (item) =>
      item.title.toLowerCase() === serviceName.toLowerCase()
  );

  setFirstFilteredData(data);
  setFilteredData(data);
  setSearchText("");

  
  setselectedFirstFilterValue("Select");

  // ✅ Auto select SECOND filter correctly
  const matchedSecondFilter = secondfilterDropdownOptions.find(
    (opt) => opt.toLowerCase() === serviceName.toLowerCase()
  );

  setselectedSecondFilterValue(matchedSecondFilter || "Select");

}, [serviceName]);








  /* ---------------- FIRST FILTER ---------------- */
  const firstFilterFun = (selectedItem) => {
    setselectedFirstFilterValue(selectedItem);
    setselectedSecondFilterValue("Select");
    setSearchText("");

    const data =
      selectedItem.toLowerCase() === "select"
        ? servicesCardData
        : servicesCardData.filter(
            (item) =>
              item.mainService.toLowerCase() === selectedItem.toLowerCase()
          );

    setFirstFilteredData(data);
    setFilteredData(data);
    setOpenMenu(null);
  };

  /* ---------------- SECOND FILTER ---------------- */
  const secondFilterFun = (selectedItem) => {
    setselectedSecondFilterValue(selectedItem);
    setSearchText("");

    const data =
      selectedItem.toLowerCase() === "select"
        ? firstFilteredData
        : firstFilteredData.filter(
            (item) =>
              item.title.toLowerCase() === selectedItem.toLowerCase()
          );

    setFilteredData(data);
    setOpenMenu(null);
  };

  /* ---------------- SEARCH ---------------- */
  const handleSearch = (value) => {
    setSearchText(value);

    if (!value.trim()) {
      setFilteredData(firstFilteredData);
      return;
    }

    const searchedData = firstFilteredData.filter((item) =>
      item.value?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(searchedData);
  };

  /* ---------------- UI ---------------- */
  return (
    <section className="csCardsFlexWrapper px-4 md:px-16 lg:px-12">
      <HeadingComponent text="Service" paddingBottom="0" />

      <div className="searchContainerWrapper">
        <div className="sfBarLeft">
          <h2 className="sfBarHeading">
            A Structured View of Our{" "}
            <span className="itly">Service Framework</span>
          </h2>

          <div className="sfBarFiltersRow" ref={dropdownRef}>
            {/* FIRST FILTER */}
            <div className="sfBarPillDropdown">
              <button
                type="button"
                className="sfBarPill sfBarPill--active"
                onClick={() =>
                  setOpenMenu(openMenu === "first" ? null : "first")
                }
              >
                <span className="sfBarPillIcon">
                  <IoCheckmarkOutline />
                </span>
                <span className="sfBarPillText">
                  {selectedFirstFilterValue}
                </span>
              </button>

              {openMenu === "first" && (
                <div className="sfBarPillMenu sfBarPillMenu--animate">
                  {firstFilterDropdownOptions.map((opt) => (
                    <button
                      key={opt}
                      className="sfBarPillMenuItem"
                      onClick={() => firstFilterFun(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* SECOND FILTER */}
            <div className="sfBarPillDropdown">
              <button
                type="button"
                className="sfBarPill sfBarPill--active"
                onClick={() =>
                  setOpenMenu(openMenu === "second" ? null : "second")
                }
              >
                <span className="sfBarPillIcon">
                  <IoCheckmarkOutline />
                </span>
                <span className="sfBarPillText">
                  {selectedSecondFilterValue}
                </span>
              </button>

              {openMenu === "second" && (
                <div className="sfBarPillMenu sfBarPillMenu--animate">
                  {secondfilterDropdownOptions.map((opt) => (
                    <button
                      key={opt}
                      className="sfBarPillMenuItem"
                      onClick={() => secondFilterFun(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="sfBarSearchWrap sfFloatSearch">
          <div className="sfBarSearchField sfFloatSearchField">
            <input
              id="sfSearch"
              type="text"
              className="sfBarSearchInput sfFloatSearchInput"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <label className="sfBarSearchLabel sfFloatSearchLabel">
              Search
            </label>
            <span className="sfBarSearchIcon">
              <CiSearch />
            </span>
          </div>
        </div>
      </div>

      {/* CARDS */}
      {filteredData.map((card, index) => (
        <Link
          to={`/innerServicePage?service=${encodeURIComponent(card.value.trim())}`}
          key={index}
          state={{ card }}
          className="csCardItem"
        >
          <div className="csCardItemImageShell">
            <img
              src={card.img}
              alt={card.title}
              className="csCardItemImage"
            />
          </div>
          <div className="csCardItemBody">
            <h3 className="csCardItemTitle">{card.value}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Service1;
