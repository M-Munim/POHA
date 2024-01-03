import React from 'react'

const Procedure = () => {
  return (
    <>
      <div className='w-4/5'>
        <div className="aim my-8">
          <p className="text-dark font-semibold text-xl mb-3">Material Required</p>
          <p className="text-dark50 font-normal text-base pl-1">
            ●  A resistance wire <br />
            ●  A voltmeter and an ammeter of appropriate range <br />
            ●  A battery (battery eliminator) <br />
            ●  A rheostat <br />
            ●  A metre scale <br />
            ●  One way key <br />
            ●  Connecting wires <br />
            ●  A piece of sand paper <br />
            ●  Screw gauge <br /></p>
        </div>

        <div className="theory mb-8">
          <p className="text-dark font-semibold text-xl mb-3">Real Lab Procedure</p>
          <ul className="text-dark50 font-normal text-base">
            <li>●  First we'll draw the circuit diagram.</li>
            <li>●  Arrange the apparatus in the same manner as given in the arrangement diagram.</li>
            <li>●  Clean the ends of the connecting wires with sand paper to remove insulation, if any.</li>
            <li>●  Make neat, clean and tight connections according to the circuit diagrams. While making connections ensure that +ve
              marked terminals of the voltmeter and ammeter are joined towards the +ve terminals of the battery.</li>
            <li>●  Determine the least count of voltmeter and ammeter, and also note the zero error, if any.</li>
            <li>●  Insert the key K, slide the rheostat contact and see that the ammeter and voltmeter are working
              properly.</li>
            <li>●  Adjust the sliding contact of the rheostat such that a small current passes through the resistance coil
              or the resistance wire.</li>
            <li>●  Note down the value of the potential difference V from the voltmeter and current I from the ammeter.</li>
            <li>●  Shift the rheostat contact slightly so that both the ammeter and voltmeter show full divisions
              readings and not in fraction.</li>
            <li>●  Record the readings of the voltmeter and ammeter.</li>
            <li>●  Take at least six sets of independent observations.</li>
            <li>●  Record the observations in a tabular column</li>
            <li>●  Now, cut the resistance wire at the points where it leaves the terminals, stretch it and find its length
              by the meter scale.</li>
            <li>●  Then find out the diameter and hence the radius of the wire using the screw gauge and calculate the
              cross- sectional area A (πr²).</li>
            <li>●  Plot a graph between current (I) along X-axis and potential difference across the wire (V) along Y-axis.</li>
            <li>●  The graph should be a stright line.</li>
            <li>●  Determine the slope of the graph. The slope will give the value of resistance (R) of the material of the
              wire.</li>
            <li>●  Calculate the resistance per centimeter of the wire.</li>
            <li>●  Now,calculate the resistivity of the material of the wire using the formula,</li>
          </ul>
        </div>

        <div className="objectives">
          <p className="text-dark font-semibold text-xl mb-3">Simulator Procedure</p>
          <ul className="text-dark50 font-normal text-base">
            <li>●  Select the metal form the drop down list.</li>
            <li>●  Select the length of the wire from the slider.</li>
            <li>●  Select the diameter of the wire using the slider.</li>
            <li>●  Select the resistance of the rheostat using the slider.</li>
            <li>●  To see the circuit diagram, click on the ‘Show circuit diagram’ check box seen inside the simulatorwindow.</li>
            <li>●  Connections can be made as seen in the circuit diagram by clicking and dragging the mouse form one
              connecting terminal to the other connecting terminal of the devices to be connected.</li>
            <li>●  Drag the wire and place it on the voltmeter to have it connected.</li>
            <li>●  Once all connections are made, click and drag the key to insert it into the switch.</li>
            <li>●  Slowly move the rheostat contact to change the voltage and current in the voltmeter and ammeter
              accordingly.</li>
            <li>●  Calculate the resistivity of the materials based on the length of the wire selected.</li>
            <li>●  Click on the ‘Show result’ check box to verify your result.</li>
            <li>●  Click on the ‘Reset’ button to redo the experiment.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Procedure