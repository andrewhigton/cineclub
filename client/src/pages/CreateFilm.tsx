import React, { useState, Fragment } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { createFilm } from '../actions/film';
import './CreateFilm.css';
	
interface ChildComponentProps extends RouteComponentProps<any> {}

interface DispatchProps {
	createFilm: (formDate: {}, history) => void;	
}

type CreateFilmProps = DispatchProps & ChildComponentProps

const CreateFilm: React.FC<CreateFilmProps> = ({
	createFilm,
	history
}) => {

	const [formData, setFormData] = useState<{
		title: string,
		date: string,
		filmtime: string,
		cinema: string,
		image: string,
		ticketPrice: number,
		crowdfundTarget: number,
		totalsoFar: number,
	}>
	({
		title: '',
		date: '',
		filmtime: '15:00',
		cinema: '',
		image: '',
		ticketPrice: 8,
		crowdfundTarget: 90,
		totalsoFar: 56,
	});

	const {
		title,
		cinema,
		date,
		filmtime,
		image,
	} = formData;
	
	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	
	const onSubmit = e => {
		e.preventDefault();
		createFilm(formData, history);
	};
	
	return (
		<Fragment>
			<h1 className='create-film-title'>Create a film screening</h1>
			
			<form className='form' onSubmit={e => onSubmit(e)}>
				<div className='form-group'>
					<p>Film</p>
					<input
						type='text'
						placeholder='Enter film title'
						name='title'
						value={title}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<p>Cinema</p>
					<input
						type='text'
						placeholder='Enter location, or cinema'
						name='cinema'
						value={cinema}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
		          <p>Date</p>
		          <input
		            type='date'
		            name='date'
		            placeholder='Enter a date'
		            value={date}
		            onChange={e => onChange(e)}
		          />
		        </div>
		        <div className='form-group'>
		          <p>Time</p>
		          <input
		            type='time'
		            name='filmtime'
		            placeholder='Enter a time'
		            value={filmtime}
		            onChange={e => onChange(e)}
		          />
		        </div>
 				<div className='form-group'>
					<p>Image</p>
					<input
						type='text'
						placeholder='Enter a url for your movie image'
						name='image'
						value={image}
						onChange={e => onChange(e)}
					/>
				</div>
				

				<input type='submit' className='btn btn-primary my-1' />
				<Link className='btn-back btn btn-light my-1' to='/film/dashboard'>
					Go Back
				</Link>
			</form>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	createFilm: state.film
});

export default connect(mapStateToProps, { createFilm })(
	withRouter(CreateFilm)
	);