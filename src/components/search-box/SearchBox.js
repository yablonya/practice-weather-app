import React, {useRef, useState} from 'react';
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import {useForecastContext} from "@/hooks/ForecastContext";
import './styles.scss'

const SearchBox = ({ selectedLoc, setSelectedLoc }) => {
  const autocompleteRef = useRef(null);
  const [inputValue, setInputValue] = useState(selectedLoc.name.toString());

  const handlePlaceChanged = () => {
    try {
      const place = autocompleteRef.current.getPlace();
      setInputValue(`${place.address_components[0].long_name}, ${place.address_components[3].long_name}`)
      if (place) {
        setSelectedLoc({
          name: place.formatted_address,
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng(),
        })
      }
    } catch (err) {
      console.error('There is no such place');
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
      libraries={['places']}
    >
      <Autocomplete
        ref={autocompleteRef}
        onLoad={ref => (autocompleteRef.current = ref)}
        onPlaceChanged={handlePlaceChanged}
        options={{ types: ['(cities)'] }}

      >
        <input
          type="search"
          placeholder="Enter the location"
          required
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </Autocomplete>
    </LoadScript>
  );
};

export default SearchBox;