import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/action/Action';
import {Button, Card} from 'react-bootstrap'

function ListEvent() {
  const dispatch = useDispatch()
  const {event} = useSelector(state => state)
  console.log(event)




  useEffect(()=>{
    dispatch(getData())
  },[])
  return (
    <div style={{maxWidth:'100%'}}>
      <div className="banner" style={{width:'100%',height:'600px',backgroundImage:`url(https://images.unsplash.com/photo-1616680214084-22670de1bc82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',position:'relative'}}>
        <div className="box-1" style={{backgroundColor:'black',width:'100%',height:'600px',position:'absolute',opacity:'0.7'}}></div>
        <div className="box-2" style={{color:'white',position:'absolute',bottom:'150px',padding:'20px',maxWidth:'800px'}}>
          <h3 style={{fontSize:'38px',fontWeight:'700'}}>Ambil Peranmu Untuk Lindungi Bumi</h3>
          <p style={{fontSize:'18px',fontWeight:'500'}}>kami percaya bahwa dukungan masyarakat adalah kunci dari keberhasilan Kampanye</p>
          <p className='desctit' style={{fontSize:'16px',fontWeight:'500'}}>Disini kamu bisa ikut event event yang kami tampung untuk kamu agar bisa ikut dengan teman teman lainnya dalam ikut mendukung, berpartisipasi dalam melestarikan bumi kita.</p>
          <Button style={{letterSpacing:'0.5px',fontSize:'18px',fontWeight:'700'}}><a style={{color:'white',textDecoration:'none'}} href='#'>Jelajahi</a></Button>
        </div>
      </div>
      <h2 style={{textAlign:'center',fontSize:'50px',fontWeight:'500'}}>Ayo jelajahi Event !</h2>
      <div className="wrapper"style={{maxWidth:'1200px',margin:'auto',display:'flex',alignItems:'center',flexWrap:'wrap',padding:'20px'}}>
        
        {event.map((item)=>{
          return(
            <Card style={{margin:'20px auto',maxWidth: '20rem',height:'30rem',backgroundColor:'wheat',borderRadius:'30px',overflow:'hidden'}}>
            <Card.Img variant="top" height={250} src={item.posterEvent} />
            <Card.Body style={{border:'1px solid black',display:'flex',justifyContent:'space-between',width:'100%'}}>
              <div className="date" style={{border:'1px solid black',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',padding:'10px'}}>
                <p>NOV</p>
                <p>20</p>
              </div>
              <div className="desc" style={{border:'1px solid black',padding:'10px'}}>
              <Card.Title>{item.nameEvent}</Card.Title>
              <Card.Text>
                {item.descEvent.slice(0,80)}...
              </Card.Text>
              </div>
            </Card.Body>
          </Card>
          )
        })}
      </div>
    </div>
  )
}

export default ListEvent