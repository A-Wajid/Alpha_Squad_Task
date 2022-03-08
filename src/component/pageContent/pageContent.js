import "./style.css";
const PageContent = () => {
  return (
    <div>
      {/* main_container_div */}
      <div className="container">
        {/* content_main_div */}
        <div className="content_main_div">
          {/* heading_div */}
          <div className="heading_div">
            <h1>FED test</h1>
          </div>
          {/* task_heading */}
          <div className="task_heading">
            <h3>Task 1: Puzzle App</h3>
          </div>
          {/* create_app_text */}
          <div className="create_app_text">
            <p>Create an app that:</p>
          </div>
          {/* card_detail_div */}
          <div className="card_detail_div">
            <p>
              Inputs a number A and creates a grid A X A e.g: input 3 OUTPUTS 3
              X 3 grid
            </p>
          </div>
          {/* first_design_main_div */}
          <div className="design_main_div">
            {/* design_div */}
            <div className="design_div">
              {/* grid_items */}
              <div className=" grid_items "></div>
              <div className=" grid_items "></div>
              <div className=" grid_items "></div>
              <div className=" grid_items "></div>
              <div className=" grid_items "></div>
              <div className=" grid_items "></div>
              <div className=" grid_items "></div>
              <div className=" grid_items "></div>
              <div className=" grid_items "></div>
            </div>
          </div>
          {/* text_div */}
          <div className="text_div">
            <p>
              Each square in grid is assigned a number between 1 and A X A and
              shufed randomly
            </p>
          </div>
          {/* second_design_main_div */}
          <div className="design_main_div">
            {/* design_div */}
            <div className="design_div">
              {/* grid_items */}
              <div className=" grid_items ">
                <p>7</p>
              </div>
              <div className=" grid_items ">
                <p>3</p>
              </div>
              <div className=" grid_items ">
                <p>1</p>
              </div>
              <div className=" grid_items ">
                <p>5</p>
              </div>
              <div className=" grid_items ">
                <p>9</p>
              </div>
              <div className=" grid_items ">
                <p>2</p>
              </div>
              <div className=" grid_items ">
                <p>4</p>
              </div>
              <div className=" grid_items ">
                <p>6</p>
              </div>
              <div className=" grid_items ">
                <p>8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageContent;
