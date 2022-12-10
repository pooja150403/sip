import './App.css';

function App() {
  return (
    <div style={{backgroundColor:'#F0FFF0'}}>
      <h1 className='text-center p-4 text-primary' style={{backgroundColor:'#87cefa'}}>FF REVIEWS</h1>
      <div className='row'>
        <div className='col-2'></div>
      <img className=' w-25 m-5 col-5 rounded' src={"https://previews.123rf.com/images/greyjj/greyjj1501/greyjj150100021/35615950-hospital-and-doctor-related-vector-infographic-flat-style.jpg"} alt=''></img>
      <div className='m-5 container text-center col-3'>
      <button className="w-75 p-3 btn m-5 btn-success">Register your hospital</button>
      <button className="w-75 p-3 m-5 btn btn-success">Ratings and Reviews</button>
      </div>
      <h2 className='m-5 text-center text-primary p-3 w-50 mx-auto rounded' style={{backgroundColor:'#87cefa'}}>INDIA'S MOST TRUSTWORTHY REVIEWS </h2>
      </div>
   </div>
  )
}

export default App;
