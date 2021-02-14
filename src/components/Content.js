import React from 'react';
import { request } from "graphql-request";

class Content extends React.Component{
 debagger;
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    componentDidMount() {
        
        const query = `
        query {
            launches(limit: 10) {
                links {
                  flickr_images
                }
                id
                launch_date_local
                rocket {
                  rocket_name
                }
                launch_success
                mission_name
              }
        }
      `;
      request("https://api.spacex.land/graphql", query)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,            
            items: result.items
          });          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          }); 
        }
      )
    }
    
    render () {
        const {error, isLoaded, items } = this.state; 
        if (error) {
            return <div>Ошибка: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Загрузка...</div>;
          } else {
        return (
        <div>
            {items.launches.map(item => (
                <figure>
                    <img  alt="A windmill" />
                    <figcaption><a href="#">{item.id}</a></figcaption>
                </figure>
            ))}
        </div>);
        }         
    }
}
export default Content;