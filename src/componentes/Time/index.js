import './Time.css';

const Time = (props) => {
    const corTime = { backgroundColor: props.corSegundaria }
    const corBorda = { borderColor: props.corPrimaria }

    return (
        <section className='time' style={corTime}>
            <h3 style={corBorda}>{props.nome}</h3>
        </section>
    )
}

export default Time;