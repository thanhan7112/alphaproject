import React, {Component } from "react";
import "../Main.css";
import "./Home.css";
import axios from "axios";
import ReactPaginate from "react-paginate";

class HomeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      perPage: 10,
      currentPage: 0,
      Coins: [],
      getId: "",
      postData: [],
      tokenbyid: [],
      // data: []
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  receivedData() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        const Coins = res.data;
        // console.log(Coins);
        const slice = Coins.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        const postData = slice.map((Coin) => (
          <React.Fragment>
            <div className="ListToken" id={Coin.id} onClick={this.handleClick}>
              <div className="ListToken_box">
                <h4>
                  <img src={Coin.image} />
                  {Coin.name}
                </h4>
              </div>
              <div className="ListToken_box">
                <h4>{Coin.current_price}</h4>
              </div>
              <div className="ListToken_box">
                {Coin.price_change_percentage_24h > 0 ? (
                  <h4>
                    {Coin.price_change_percentage_24h} %
                    <i class="bx bx-chevrons-up" style={{ color: "green" }}></i>
                  </h4>
                ) : (
                  <h4>
                    {Coin.price_change_percentage_24h} %
                    <i class="bx bx-chevrons-down" style={{ color: "red" }}></i>
                  </h4>
                )}
              </div>
              <div className="ListToken_box">
                {" "}
                <h4>
                  {Coin.total_volume}
                  <i class="bx bx-dollar"></i>
                </h4>
              </div>
              <div className="ListToken_box">
                <h4>
                  {Coin.market_cap}
                  <i class="bx bx-dollar"></i>
                </h4>
              </div>
            </div>
          </React.Fragment>
        ));
        this.setState({
          pageCount: Math.ceil(Coins.length / this.state.perPage),
          postData,
          Coins,
        });
      });
  }
  handleClick(e) {
    this.setState({
      getId: e.currentTarget.id,
    });
    const id = e.currentTarget.id;
    console.log("ID la" + id);
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((res) => {
      this.setState({
        tokenbyid: res.data,
      });
      console.log("Tokenid" + id);
      console.log(this.state.tokenbyid);
    });
    // axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=14&interval=daily`).then((res) => {
    //   this.setState(() => ({
    //     data: res.data.prices,
    //   }));
    //   console.log("Tokenid" + id);
    //   console.log(this.state.data);
    // });
  }


  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };
  componentDidMount() {
    this.receivedData();
  }
  render() {
  
    const idCoin = this.state.Coins.map((coin) => {
      return coin.id;
    });
    let isEqual;
    for (let i = 0; i < idCoin.length; i++) {
      if (idCoin[i] == this.state.getId) {
        isEqual = true;
        break;
      } else {
        isEqual = false;
      }
    }
    return (
      <div className="home_content_page">

        <div className="home_content_page_chart">
          {isEqual == true ? (
            <div className="detail_1">
              <div className="Rank_Name">
                <div className="boxIMG">
                  {this.state.tokenbyid.image ? (
                    <img
                      className="imgsize"
                      src={this.state.tokenbyid.image.small}
                      alt=""
                    />
                  ) : null}
                </div>
                <h3>{this.state.tokenbyid.id}</h3>
                <h3>#{this.state.tokenbyid.coingecko_rank}</h3>
              </div>
              <div className="Change_time">
                <div className="Change_time_line">
                  <div className="Change_time_line_detail">
                    {this.state.tokenbyid.market_data?.price_change_percentage_1h_in_currency ? (
                      <p>
                        1h {this.state.tokenbyid.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div className="Change_time_line_detail">
                    {this.state.tokenbyid.market_data?.price_change_percentage_24h_in_currency ? (
                      <p>
                        24h {this.state.tokenbyid.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="Change_time_line">
                  <div className="Change_time_line_detail">
                    {this.state.tokenbyid.market_data?.price_change_percentage_24h_in_currency ? (
                      <p>
                        7d {this.state.tokenbyid.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div className="Change_time_line_detail">
                    {this.state.tokenbyid.market_data?.price_change_percentage_24h_in_currency ? (
                      <p>
                        14d {this.state.tokenbyid.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="Change_time_line">
                  <div className="Change_time_line_detail">
                    {this.state.tokenbyid.market_data?.price_change_percentage_24h_in_currency ? (
                      <p>
                        30d {this.state.tokenbyid.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div className="Change_time_line_detail">
                    {this.state.tokenbyid.market_data?.price_change_percentage_24h_in_currency ? (
                      <p>
                        1y {this.state.tokenbyid.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              {/* <div className="Price">
              <h3>{this.state.tokenbyid.market_data?.current_price ? (
                <h3>{this.state.tokenbyid.market_data.current_price.usd.toLocaleString()} <i class='bx bx-dollar' ></i></h3>
              ) : null}</h3>
            </div> */}
              <div className="detail_2">

              </div>
            </div>

          ) : (
            null
          )}
        </div>

        <div className="home_content_page_list_token">
          <div className="Page_list_token_child_left">
            <div className="ListContent">
              <div className="ListToken_box">
                <h4>Coin</h4>
              </div>
              <div className="ListToken_box">
                <h4>Price</h4>
              </div>
              <div className="ListToken_box">
                <h4>24h</h4>
              </div>
              <div className="ListToken_box">
                <h4>Volume</h4>
              </div>
              <div className="ListToken_box">
                <h4>Mkt Cap</h4>
              </div>
            </div>

            {this.state.postData}
          </div>
          <div className="Page_list_token_child_right">
            <div className="React_Paginate">

              {/* <Doughnut data={[1,2,3,5,6]}/> */}
              <ReactPaginate
                previousLabel={<i class="bx bx-chevron-left"></i>}
                nextLabel={<i class="bx bx-chevron-right"></i>}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
            <div className="React_Paginate_detail"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeBody;
