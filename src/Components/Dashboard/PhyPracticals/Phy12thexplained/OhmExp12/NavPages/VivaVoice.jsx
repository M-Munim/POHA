import React from 'react'

const VivaVoice = () => {
    return (
        <>
            <div className=" mt-5 pl-3">
                <p className="font-semibold text-dark text-xl my-4">1. Which Law explains the following? At constant temperature the current flowing through
                    a conductor is directly proportional to the potential difference between its ends. </p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li class="option"><label><input type="radio" name="answer" value="option1" /> Joule’s Law</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option2" /> Boyle’s Law</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option3" /> Charle’s Law</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option4" /> Ohm’s Law</label></li>

                </ol>

                <p className="font-semibold text-dark text-xl my-4">2. What does the current through a wire depend on?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li class="option"><label><input type="radio" name="answer" value="option1" /> The potential difference applied.</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option2" /> The resistance of the wire.</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option3" /> The thickness of the wire.</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option4" /> Both resistance and potential difference.</label></li>

                </ol>

                <p className="font-semibold text-dark text-xl my-4">3. You are measuring the current in a circuit that is operated on an 18 V battery. The reads 40
                    mA. Later you notice the current has dropped to 20 mA. How much has the voltage changed?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li class="option"><label><input type="radio" name="answer" value="option1" /> 9 v</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option2" /> 36 v</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option3" /> 0 v</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option4" /> 18 v</label></li>

                </ol>

                <p className="font-semibold text-dark text-xl my-4">4. What is the shape of V v/s I graph for a linear resistor?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li class="option"><label><input type="radio" name="answer" value="option1" /> Parabola</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option2" /> Straight line</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option3" /> Hyperbola</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option4" /> None of these</label></li>

                </ol>

                <p className="font-semibold text-dark text-xl my-4">5. Which of the following represent ohm’s law?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li class="option"><label><input type="radio" name="answer" value="option1" /> Current = Resistance × potential difference.</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option2" /> Current = Resistance / Potential difference.</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option3" /> Potential difference / current = Resistance.</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option4" /> None of these.</label></li>

                </ol>

                <p className="font-semibold text-dark text-xl my-4">6. What is the potential difference required to pass a current of 5A through a metallic rod
                    of resistance 10Ω?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li class="option"><label><input type="radio" name="answer" value="option1" /> 5 v</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option2" /> 50 v</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option3" /> 0.5 v</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option4" /> 0.05 v</label></li>

                </ol>

                <p className="font-semibold text-dark text-xl my-4">7. Choose the correct statement from the alternatives?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li class="option"><label><input type="radio" name="answer" value="option1" /> Every material has resistance.</label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option2" /> Resistance of a material is the measure of how much it opposes the passage of free electrons.
                    </label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option3" />  All of them are true
                    </label></li>
                    <li class="option"><label><input type="radio" name="answer" value="option4" />  The resistance of a material is independent of the current passing through it.</label></li>
                </ol>

                <div class="btn-container mt-10 pl-2">
                    <button class="btn" type="submit" className='py-5 px-8 rounded-lg text-overviewWhite font-semibold text-base' style={{
                        background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                    }}>Submit</button>

                    <span className="bg-aliceBlue py-5 px-8 rounded-lg font-semibold text-base ml-5 cursor-pointer" >

                        <button class="btn" type="reset" className='' style={{
                            background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                        }}>Cancel</button>

                    </span>


                </div>
            </div>
        </>
    )
}

export default VivaVoice