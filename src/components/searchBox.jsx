import { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchBox() {

    const [startDate, setStartDate] = useState(new Date());
    const [isOpenStart, setIsOpenStart] = useState(false);

    const [endDate, setEndDate] = useState(new Date());
    const [isOpenEnd, setIsOpenEnd] = useState(false);

    const handleStartChange = (e) => {
        setIsOpenStart(!isOpenStart);
        setStartDate(e);
    };
    const handleEndChange = (e) => {
        setIsOpenEnd(!isOpenEnd);
        setEndDate(e);
    };
    const handleStartClick = (e) => {
        e.preventDefault();
        setIsOpenStart(!isOpenStart);
    };
    const handleEndClick = (e) => {
        e.preventDefault();
        setIsOpenEnd(!isOpenEnd);
    };
        
    return (
      <>
        <div class="h-[calc(100vh-8rem)] flex items-center justify-center pb-12">
            <div class="w-1/2 h-72 rounded-xl bg-searchBox flex flex-col items-center">
                <div class="w-5/6 h-full space-y-3 mt-10">
                    <div class="h-1/4">
                        <input
                            type="text" 
                            class="w-full h-full bg-white rounded-full px-8 font-bold border-transparent"
                            
                        />
                    </div>
                    <div class="flex flex-row w-full h-1/4 justify-center space-x-2.5">

                        <button className="w-1/2 h-full bg-white rounded-full px-8 font-bold flex items-center overflow-hidden" onClick={handleStartClick}>
                        The Date
                        </button>

                        <button className="w-1/2 h-full bg-white rounded-full px-8 font-bold flex items-center overflow-hidden" onClick={handleEndClick}>
                        The Date
                        </button>
                    </div>
                    <div class="flex w-full h-1/4 justify-center">
                        <input
                            type="text" 
                            class="w-full h-full bg-white rounded-full px-8 font-bold border-transparent"
                        />
                    </div>
                </div>
            </div>
            <div class="absolute right-10">
            {isOpenStart && (
                <DatePicker selected={startDate} onChange={handleStartChange} inline />
            )}
            </div>
            <div class="absolute left-10">
            {isOpenEnd && (
                <DatePicker selected={endDate} onChange={handleEndChange} inline />
            )}
            </div>
            
        </div>
        
      </>
    );
  }