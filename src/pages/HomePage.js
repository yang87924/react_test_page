import React, { useState } from 'react';
import ClearFix from "../components/common/ClearFix";
import DefaultLayout from "../components/layout/DefaultLayout";
import { useNavigate } from 'react-router-dom'; // 使用 useNavigate 替代 useHistory



const HomePage = () => {

    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate(); // 使用 useNavigate 替代 useHistory

    const handleButtonClick = () => {
        navigate("/Personal"); // 替换为您要跳转的路径
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    };
    
    return (
        <DefaultLayout fixedHeader>           
            <ClearFix height="100px"/>  

            <div>
                <h1>Home Page</h1>                                                                               
            </div>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="輸入內容" value={inputValue} onChange={handleInputChange} />
                <button type="submit" onClick={handleButtonClick}>提交</button>
            </form>
            
            <ClearFix height="500px"/>
        </DefaultLayout>
    );
};

export default HomePage;