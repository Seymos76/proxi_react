import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"
import AudioPlayer from 'react-h5-audio-player';
import { Link } from "react-router-dom";
import 'react-h5-audio-player/lib/styles.css';

const visitSteps = 13;

const Controls = ({ step, audio }) => {
    console.log('Audio', audio);
    var buttonLeft = step > 1 ? <Link className={"btn"} to={`/visit/${step - 1}`}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link> : null;
    var buttonRight = step > (visitSteps - 1) ? null : <Link className={"btn"} to={`/visit/${step + 1}`}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>;
    var audioTag = Object.keys(audio).length && <AudioPlayer
                    src={audio.audioSrc}
                    onPlay={e => console.log("onPlay:",e)}
                    autoPlay={false}
                    autoPlayAfterSrcChange={false}
                    showJumpControls={false}
                    customAdditionalControls={[]}
                    showDownloadProgress={false}
                    customVolumeControls={[]}
                    style={{ width: '90%' }}
                />;
    var classes = ['visit-controls'];
    if(step === visitSteps) classes.push('end');
    if(step === 2) classes.push('no-audio');

    return (
        <section className={classes.join(' ')}>
            { buttonLeft }
            { step !== 2 && audioTag }
            { buttonRight }
        </section>
    );
}

export default Controls

Controls.propTypes = {
    step: PropTypes.number.isRequired
}