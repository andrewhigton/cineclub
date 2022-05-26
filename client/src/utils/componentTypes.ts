import { RouteComponentProps } from 'react-router-dom';

export type ticketType = {
        cinema: string,
        cost: number,
        crowdfundTarget: number,
        date: string,
        numberOfTickets: number,
        ticketPrice: string,
        title: string,
        totalsoFar: number
  }

export type userType =  {
    _id: number,
    name: string,
    email: string,
    tickets: Array<{
      cinema: string,
        cost: number,
        crowdfundTarget: number,
        date: string,
        numberOfTickets: number,
        ticketPrice: string,
        title: string,
        totalsoFar: number,
        _id?: string | number | null 
    }>
  };

export type filmsType = Array<{
          cinema: string,
          crowdfundTarget: number,
          date: number,
          filmtime: number,
          image: string,
          ticketPrice: number,
          title: string,
          totalsoFar: number,
          user: number,
          __v: number,
          _id: number,
        }>; 

export interface filmInterface {
        film: {
        _id: string,
        user: string,
        title: string,
        date: string,
        cinema: string,
        image: string,
        ticketPrice: string,
        crowdfundTarget: number,
        totalsoFar: number
      };
      loading: boolean;
    }

export type filmType = {
        _id: string,
        user: string,
        title: string,
        date: string,
        cinema: string,
        image: string,
        ticketPrice: string,
        crowdfundTarget: number,
        totalsoFar: number
      };

export interface DashboardProps {
      auth: AuthProps, 
      film: FilmProps,
}

export interface AuthProps {
    user: userType, 
    loading: boolean, 
}

export interface FilmProps {
    films: filmsType, 
    filmLoading: boolean, 
}

    


export interface ChildComponentProps extends RouteComponentProps<any> {
  match: any
  history: any
}
