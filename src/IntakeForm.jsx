import React, { useState, useEffect } from 'react';
    import './IntakeForm.css';

    function IntakeForm() {
      const [length, setLength] = useState('');
      const [width, setWidth] = useState('');
      const [quiltingType, setQuiltingType] = useState('edge-to-edge');
      const [description, setDescription] = useState('');
      const [cost, setCost] = useState(0);

      useEffect(() => {
        calculateCost();
      }, [length, width, quiltingType]);

      const calculateCost = () => {
        if (length && width && quiltingType === 'edge-to-edge') {
          const area = parseFloat(length) * parseFloat(width);
          const pricePerSquareInch = 0.02;
          const calculatedCost = area * pricePerSquareInch;
          setCost(calculatedCost.toFixed(2));
        } else {
          setCost(0);
        }
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted! Estimated cost: $' + cost); // Replace with actual submission logic
      };

      return (
        <div className="intake-form">
          <h2>Quilt Intake Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group dimensions">
              <label htmlFor="width">Dimensions (inches):</label>
              <input
                type="number"
                id="width"
                placeholder="Width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                required
              />
              <span> x </span>
              <input
                type="number"
                id="length"
                placeholder="Length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="quiltingType">Quilting Type:</label>
              <select
                id="quiltingType"
                value={quiltingType}
                onChange={(e) => setQuiltingType(e.target.value)}
              >
                <option value="edge-to-edge">Edge-to-Edge</option>
                <option value="custom">Custom Quilting (Contact for Quote)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Quilt Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
              />
            </div>
            <button type="submit">Submit</button>
            {quiltingType === 'edge-to-edge' && (
              <div className="cost-estimate">
                <strong>Estimated Cost: ${cost}</strong>
              </div>
            )}
          </form>
        </div>
      );
    }

    export default IntakeForm;
