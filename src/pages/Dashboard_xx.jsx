import { Link } from 'react-router-dom';
// import { getHome } from '../services/apiHome';


import { useHomeOpen } from './open/features/cabins/useHomeOpen';
const Dashboard_xx = () => {
  const { singer, isLoading } = useHomeOpen();
  console.log('Home singer', singer);
  // useEffect(() => {
  //   getHome.then((data) => console.log('booking(1) data', data));
  // }, []);
  return (
    <>
      
			<div className="movie-list">
				<div className="title-bar">
					<div className="left">
						<p className="bold">Popular Trailers</p>
						<p className="grey">Action / Adventure</p>
					</div> 
					<div className="right">
						<a className="blue" href="#">Rating <i className="fa fa-angle-down"></i></a>
						<a href="#">Newest</a>
						<a href="#">Oldest</a>
					</div> 
				</div> 

				<ul className="list">
					<li>
						<img src="https://qfvxjrlpnpxdkvvjlnnu.supabase.co/storage/v1/object/public/project_img/Sin_City.jpg" alt="" className="cover" />
						<p className="title">Sin City: A Dame To Kill For</p>
						<p className="genre">Action, Crime</p>
					</li>
					<li>
						<img src="https://qfvxjrlpnpxdkvvjlnnu.supabase.co/storage/v1/object/public/project_img/Transcendence.jpg" alt="" className="cover" />
						<p className="title">Transcendence</p>
						<p className="genre">Action, Drama</p>
					</li>
					<li>
						<img src="https://qfvxjrlpnpxdkvvjlnnu.supabase.co/storage/v1/object/public/project_img/Need_For_Speed.jpg" alt="" className="cover" />
						<p className="title">Need For Speed</p>
						<p className="genre">Action, Crime</p>
					</li>
					<div className="App">
					<li>
						<img src="https://qfvxjrlpnpxdkvvjlnnu.supabase.co/storage/v1/object/public/project_img/The_Amazing_Spiderman.jpg" alt="" className="cover" />
						
						<p className="title">The Amazing Spiderman</p>
						<p className="genre">Action, Adventure</p>
					</li>
					</div>
				</ul>
				<div>
				<a href="#" className="load-more">Add movies  <span className="fa fa-plus"></span></a>
				<a href="#" className="load-more">Clean movies  <span className="fa fa-minus"></span></a>
				</div>
				

			</div> 
    </>
  );
};

export default Dashboard_xx;
