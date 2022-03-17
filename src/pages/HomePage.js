import React from 'react';
import HomeHero from "../components/HomeHero/HomeHero";
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';
import Navbar from '../components/Navbar/Navbar';
import Lane from "../components/Lane/Lane"
import { LaneItem } from '../components/Lane/LaneItem';
import movies from "../movies.json";
import { v4 as uuidv4 } from 'uuid';


const HomePage = () => {
  const laneMovie = movies && movies.map((movie) => {
    return (
    <LaneItem key={uuidv4()}>
      <img src={require(`../assets/mockup_images/${movie.id}`)}
      alt={movie.title}
      className="movie-image" />
    </LaneItem>)
    } )

  return (
    <>
      <Navbar />
      <HomeHero />
      <Lane>
        {/* {laneMovie} */}
        <LaneItem>1</LaneItem>
        <LaneItem>2</LaneItem>
        <LaneItem>3</LaneItem>
        <LaneItem>4</LaneItem>
        <LaneItem>5</LaneItem>
        <LaneItem>6</LaneItem>
        <LaneItem>7</LaneItem>
        <LaneItem>8</LaneItem>
        <LaneItem>9</LaneItem>
        <LaneItem>10</LaneItem>
        <LaneItem>11</LaneItem>
        <LaneItem>12</LaneItem>
        <LaneItem>13</LaneItem>
        <LaneItem>14</LaneItem>
        <LaneItem>15</LaneItem>
        <LaneItem>16</LaneItem>
        <LaneItem>17</LaneItem>
        <LaneItem>18</LaneItem>
      </Lane>
      <FooterBrowserPage />
    </>
  );
};

export default HomePage;