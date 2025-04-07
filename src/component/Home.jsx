import React, { useEffect, useState } from 'react';
import '../App';

const Home = () => {
  const [sections, setSections] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => {
        const sections = data.data.sections || [];
        setSections(sections);
      });
  }, []);

  const handleInputChange = (sectionIndex, itemIndex, field, value) => {
    const updatedSections = [...sections];
    const item = updatedSections[sectionIndex].items[itemIndex];

    if (field === 'quantity') {
      item.quantity = parseInt(value, 10);
    } else if (field === 'unit_cost') {
      item.unit_cost = Math.round(parseFloat(value) * 100); // store in cents
    }

    setSections(updatedSections);
    calculateTotals(updatedSections);
  };

  const calculateTotals = (sectionsData) => {
    let grandTotalValue = 0;

    sectionsData.forEach(section => {
      section.items.forEach(item => {
        const qty = item.quantity || 0;
        const unitCost = (item.unit_cost || 0) / 100;
        item.total = Math.round(qty * unitCost * 100); // total in cents
      });

      grandTotalValue += section.items.reduce((sum, i) => sum + (i.total || 0), 0);
    });

    setGrandTotal(grandTotalValue / 100); // display in dollars
  };

  useEffect(() => {
    calculateTotals(sections);
  }, [sections]);

  return (
    <div className='section'>
      <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'right' }}>
        Grand Total: ${grandTotal.toFixed(2)}
      </div>

      {sections.map((section, sectionIndex) => {
        const sectionTotal = section.items.reduce((sum, i) => sum + (i.total || 0), 0) / 100;

        return (
          <table key={sectionIndex} style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th className='cellStyle'>Type</th>
                <th className='cellStyle'>Item Name</th>
                <th className='cellStyle'>Qty</th>
                <th className='cellStyle'>Unit Cost</th>
                <th className='cellStyle'>Unit</th>
                <th className='cellStyle'>Total</th>
                <th className='cellStyle'>Tax</th>
                <th className='cellStyle'>Cost Code</th>
              </tr>
            </thead>
            <tbody>
              {section.items.map((item, itemIndex) => (
                <tr key={itemIndex}>
                  <td className='cellStyle'>{item.item_type_display_name}</td>
                  <td className='cellStyle'>{item.item_type_name}</td>
                  <td className='cellStyle'>
                    <input
                      type="number"
                      min="0"
                      value={item.quantity || ''}
                      onChange={e => handleInputChange(sectionIndex, itemIndex, 'quantity', e.target.value)}
                      className='inputStyle'
                    />
                  </td>
                  <td className='cellStyle'>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={(item.unit_cost / 100).toFixed(2)}
                      onChange={e => handleInputChange(sectionIndex, itemIndex, 'unit_cost', e.target.value)}
                      className='inputStyle'
                    />
                  </td>
                  <td className='cellStyle'>{item.unit}</td>
                  <td className='cellStyle'>${((item.total || 0) / 100).toFixed(2)}</td>
                  <td className='cellStyle'>{item.tax_rate ? '✔️' : ''}</td>
                  <td className='cellStyle'>{item.cost_code || ''}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="5"></td>
                <td colSpan="3" style={{ fontWeight: 'bold', paddingTop: '2px' }}>
                  Section Total: ${sectionTotal.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default Home;
