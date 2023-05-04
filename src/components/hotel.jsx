import { useState, useEffect } from "react";
import { getHotel, getTypeHotel } from "./getHotel";

export default function Hotel({result}) {

    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hotelTypeBox, setHotelTypeBox] = useState("");

    const handleHotelTypeBoxChange = (e) => {
      const { name } = e.target;
      let hotelType;
    
      switch (name) {
        case 'global':
          hotelType = '1';
          break;
        case 'normal':
          hotelType = '2';
          break;
        case 'ordinary':
          hotelType = '3';
          break;
        case 'bandb':
          hotelType = '4';
          break;
        default:
          hotelType = null;
      }
    
      setHotelTypeBox(hotelType);
    };

    useEffect(() => {
      async function fetchData() {
        let hotelList;
        if (hotelTypeBox) {
          hotelList = await getTypeHotel(result, hotelTypeBox);
        } else {
          hotelList = await getHotel(result);
        }
        setHotels(hotelList);
        setIsLoading(false);
      }
      fetchData();
    });


    return (
      <>
        {isLoading ? (
            <p className="text-lg p-8 font-bold text-gray-600">載入中...</p>
        ) : (
        <ul>
          {hotels.length === 0 && 
            <p class="p-8 font-bold text-gray-600">
              找不到結果QQ<br /><br />
              請確認以下內容是否設定正確：<br/>
              1. 將「台」替換為「臺」字。 Ex：臺南市 <br />
              2. 時間設定正確 <br />
              3. 網路狀態良好
            </p>
          }
          {hotels.length !== 0 &&
            <div class="flex flex-row">
              <div class=" h-[calc(172vh)] w-60 mt-12 ml-4 bg-gray-200 rounded-3xl">
                <div class="-translate-y-8 h-12 w-56 ml-2 bg-gray-700 rounded-full flex items-center justify-center">
                  <p class="text-2xl font-bold w-max text-white">篩選條件</p>
                </div>
                <div class=" flex flex-col gap-4 place-items-center text-center h-full">
                  <div class="h-28 w-48 bg-white rounded-xl">
                    <p class="mt-3 text-center text-xl">飯店等級</p>
                    <div class="mt-2 ml-4 h-1 w-40  bg-black"></div>
                  </div>
                  <div class="h-28 w-48 bg-white rounded-xl">
                    <p class="mt-3 text-center text-xl">平均滿意度</p>
                    <div class="mt-2 ml-4 h-1 w-40  bg-black"></div>
                  </div>
                  <div class="h-28 w-48 bg-white rounded-xl">
                    <p class="mt-3 text-center text-xl">價格範圍</p>
                    <div class="mt-2 ml-4 h-1 w-40  bg-black"></div>
                  </div>
                  <div class="h-72 w-48 bg-white rounded-xl">
                    <p class="mt-3 text-center text-xl">其他服務</p>
                    <div class="mt-2 ml-4 h-1 w-40 bg-black">
                      <div class="flex flex-col items-start ml-5 space-y-2 font-black text-md">
                        <div class="mt-4 space-x-2">
                          <input type="checkbox" id="network" name="network" class="mb-1"/>
                          <label for="site">免費網路</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="computer" name="computer" class="mb-1"/>
                          <label for="site">免費電腦</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="parking" name="parking" class="mb-1"/>
                          <label for="site">停車服務</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="tour" name="tour" class="mb-1"/>
                          <label for="site">導覽活動</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="card" name="card" class="mb-1"/>
                          <label for="site">國民旅遊卡</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="dining" name="dining" class="mb-1"/>
                          <label for="site">咖啡廳 / 餐廳</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="h-52 w-48 bg-white rounded-xl">
                    <p class="mt-3 text-center text-xl">住宿類型</p>
                    <div class="mt-2 ml-4 h-1 w-40  bg-black">
                    <div class="flex flex-col ml-4 items-start space-y-2 font-black text-md">
                        <div class="mt-4 space-x-2">
                          <input type="checkbox" id="global" name="global" checked={hotelTypeBox === "1"} onChange={handleHotelTypeBoxChange} class="mb-1" />
                          <label for="site">國際觀光旅館</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="normal" name="normal" checked={hotelTypeBox === "2"} onChange={handleHotelTypeBoxChange} class="mb-1" />
                          <label for="site">一般觀光旅館</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="ordinary" name="ordinary" checked={hotelTypeBox === "3"} onChange={handleHotelTypeBoxChange} class="mb-1" />
                          <label for="site">一般旅館</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="bandb" name="bandb" checked={hotelTypeBox === "4"} onChange={handleHotelTypeBoxChange} class="mb-1" />
                          <label for="site">民宿</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div>
            {hotels.map((hotel) => (
              <div className="w-[calc(1/1-2rem)] h-[22rem] flex flex-col mt-4 space-y-4 ml-4">
                  <li key={`${hotel.Id}-${hotel.Name}`}>
                    <>
                      <div class="h-[22rem] bg-gray-200 rounded-3xl p-8 flex">
                        <div class="w-1/2 space-y-2 mr-2">
                          <p class="text-gray-700 font-black text-2xl">{ hotel.Name }</p>
                          <p class="text-sm line-clamp-1">{ hotel.Description }</p>
                          { hotel.Picture1 !== "" &&
                            <img alt="journey-pic" src={hotel.Picture1} className="h-[12rem] w-[16rem] rounded-lg"></img>
                          }
                          { hotel.Picture1 === "" &&
                            <p className="h-[12rem] w-[16rem] rounded-lg bg-gray-300 text-gray-600 font-bold items-center flex justify-center">店家沒有提供照片</p>
                          } 
                          <p class="text-sm font-bold">{hotel.Add}</p>
                        </div>
                        <div class="flex w-full">
                          <div class="flex flex-col w-full h-full space-y-5 mt-1 mr-4">
                            <div class="flex w-full h-1/5 rounded-xl bg-white ">
                              
                            </div>
                            <div class="flex w-full h-1/5 rounded-xl bg-white ">
                            
                            </div>
                            <div class="flex w-full h-1/5 rounded-xl bg-white ">
                              
                            </div>
                            <div class="flex w-full h-1/5 rounded-xl bg-white ">
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </li>
                </div>
              ))}
              </div>
            </div>
          }
        </ul>
        )}
      </>
  );}