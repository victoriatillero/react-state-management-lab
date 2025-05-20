const ZombieFightersListItem = (props) => {
    return (
        <>
      <li>
        <img src={props.image} alt={`${props.name} attached image`}/>
        <h3>{props.fighter} </h3>
        <p>Price: $ {props.price} </p>
        <p>Strength: {props.strength} </p>
        <p>Agility: {props.agility} </p>
        <button onClick={props.handleAddFighter}>Add to team</button>
      </li>
        </>
    );
  };

  export default ZombieFightersListItem;
