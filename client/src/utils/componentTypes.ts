import { RouteComponentProps } from 'react-router-dom';

export type ticketType = {
        cinema: string,
        cost: number,
        crowdfundTarget: number,
        date: any,
        filmtime?: number,
        numberOfTickets: number,
        ticketPrice: number,
        title: string,
        totalsoFar: number
  }

export type userType =  {
    _id: any,
    name: string,
    email: string,
    loading: boolean,
    tickets: Array<{
      cinema: string,
        cost: number,
        crowdfundTarget: number,
        date: any,
        filmtime?: number,
        numberOfTickets: number,
        ticketPrice: number,
        title: string,
        totalsoFar: number,
        _id?: any 
    }>
  };

export interface filmInterface {
        film: {
        _id: any,
        user: string,
        title: string,
        date: any,
        filmtime: number,
        cinema: string,
        image: string,
        ticketPrice: number,
        crowdfundTarget: number,
        totalsoFar: number
      };
      loading: boolean;
    }

export type filmType = {
        _id: any,
        user: string,
        title: string,
        date: any,
        filmtime: number,
        cinema: string,
        image: string,
        ticketPrice: number,
        crowdfundTarget: number,
        totalsoFar: number
      };

export interface FilmsType {
    film: {
        films:Array<{
            _id: any, 
            user: string,
            title: string,
            date: any,
            filmtime: number,
            cinema: string,
            image: string,
            ticketPrice: number,
            crowdfundTarget: number,
            totalsoFar: number
            }>;
        loading: boolean;
        };
    };


export interface FilmsMapType {

        films:Array<{
            _id: any, 
            user: string,
            title: string,
            date: any,
            filmtime: number,
            cinema: string,
            image: string,
            ticketPrice: number,
            crowdfundTarget: number,
            totalsoFar: number
            }>;
        loading: boolean;
        };


export type filmsDashboardType = Array<{
            _id: any, 
            user: string,
            title: string,
            date: any,
            filmtime: number,
            cinema: string,
            image: string,
            ticketPrice: number,
            crowdfundTarget: number,
            totalsoFar: number,
            }>;
   

export interface FilmProps {
  film: filmType,
  index: number,
}


 export interface FilmsProps {
    films: Array<{
            _id: any, 
            user: string,
            title: string,
            date: any,
            filmtime: number,
            cinema: string,
            image: string,
            ticketPrice: number,
            crowdfundTarget: number,
            totalsoFar: number
            }>;
            loading: boolean;
    };


export interface DashboardProps {
      auth: AuthProps, 
      film: FilmProps,
}

export interface AuthProps {
    user: userType, 
    loading: boolean, 
}
  
export interface DashboardProps {
    film: FilmProps,
    loading: boolean, 
}
   
export interface ChildComponentProps extends RouteComponentProps<any> {
  match: any;
  history: any;
  location: any;
}
