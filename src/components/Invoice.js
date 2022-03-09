import { Link, Routes, Route, useParams } from 'react-router-dom'

function Invoice() {
    let params = useParams();
    return <h1>Invoice {params.slug}</h1>;
  }

  export default Invoice