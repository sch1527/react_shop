import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import style from '../detail.module.css';
function Detail(props) {
  let { id } = useParams();
  id = Number(id);
  console.log(id);
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  let Box = styled.div`
  padding: 20px;
  color: gray;
  border: 1px solid #333;`
  let BtnTest = styled.button`
  border:1px solid #333;
  color:red;
  background : ${props => props.bg}`

  useEffect(() => {
    let a = setTimeout(() => {
        setAlert(false)
    }, 2000)
    console.log("test");
    return() => {
        console.log('test2')
        clearTimeout(a)
    }
  }, [count]);

  return (
    <div className="list_con">
        <Box>
            <BtnTest bg = 'green'>테스트1</BtnTest>
            <BtnTest bg = 'blue'>테스트2</BtnTest>
        </Box>
      {alert == true ? (
        <div className={style.alert}>
          2초 이내로 클릭하지 않으면 자동 구매됩니다.
        </div>
      ) : null
      }

      <p>숫자 {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <p>{props.shoes[id].title}</p>
      <img src={`${process.env.PUBLIC_URL}/img/product0${id + 1}.jpg`} />
      <p>{props.shoes[id].price}</p>
    </div>
  );
}
export default Detail;
