import React from 'react';
import HomeHero from "../components/HomeHero/HomeHero";
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';
import Navbar from '../components/Navbar/Navbar';
import Lane from "../components/Lane/Lane"
import { LaneItem } from '../components/Lane/LaneItem';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <div>Home Page</div>
      <Lane>
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
