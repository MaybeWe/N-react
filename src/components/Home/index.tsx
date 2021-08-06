import React from 'react';
import axios from 'axios';

export default class Home extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.getHome();
    }

    getHome() {
        axios.post('user/getdd')
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <>
                home
            </>
        );
    }

}
