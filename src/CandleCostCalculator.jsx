import React, { useState } from 'react';

function CandleCostCalculator() {
  const [wax, setWax] = useState('');
  const [wick, setWick] = useState('');
  const [oil, setOil] = useState('');
  const [vase, setVase] = useState('');
  const [candles, setCandles] = useState('');
  const [result, setResult] = useState(null);
  const [costPerCandle, setCostPerCandle] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const waxCost = parseFloat(wax) || 0;
    const wickCost = parseFloat(wick) || 0;
    const oilCost = parseFloat(oil) || 0;
    const vaseCost = parseFloat(vase) || 0;
    const numCandles = parseInt(candles) || 0;
    
    if (numCandles <= 0) {
      setError('Please enter a valid number of candles (at least 1).');
      setResult(null);
      setCostPerCandle(null);
      return;
    }
    const total = waxCost + wickCost + oilCost + vaseCost;
    setResult(total);
    setCostPerCandle(total / numCandles);
  };

  return (
    <div style={{ 
      maxWidth: 900,
      margin: '20px auto',
      padding: 24,
      border: '1px solid #ddd',
      borderRadius: 16,
      background: `linear-gradient(rgba(248, 250, 252, 0.95), rgba(224, 231, 239, 0.95)), url('https://images.unsplash.com/photo-1603207213991-47bbcd0a8cc5?auto=format&fit=crop&w=800&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '32px',
      alignItems: 'start'
    }}>
      <div style={{ background: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '12px' }}>
        <h2 style={{ color: '#1a202c', fontWeight: 'bold', marginBottom: 16, textAlign: 'center', fontSize: 24, letterSpacing: 1 }}>🕯️ Candle Cost Calculator</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div style={{ marginBottom: 10 }}>
            <label style={{ color: '#222', fontWeight: 'bold', display: 'block', marginBottom: 4 }} htmlFor="wax">Wax Cost (NPR)</label>
            <input id="wax" type="number" step="any" value={wax} onChange={e => setWax(e.target.value)} required placeholder="e.g. 500" 
              style={{ width: '100%', padding: '8px', background: '#fff', color: '#222', border: '1.5px solid #4a5568', borderRadius: 6, fontSize: 15, outlineColor: '#3182ce', marginBottom: 2 }} />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ color: '#222', fontWeight: 'bold', display: 'block', marginBottom: 4 }} htmlFor="wick">Wick Cost (NPR)</label>
            <input id="wick" type="number" step="any" value={wick} onChange={e => setWick(e.target.value)} required placeholder="e.g. 100" 
              style={{ width: '100%', padding: '8px', background: '#fff', color: '#222', border: '1.5px solid #4a5568', borderRadius: 6, fontSize: 15, outlineColor: '#3182ce', marginBottom: 2 }} />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ color: '#222', fontWeight: 'bold', display: 'block', marginBottom: 4 }} htmlFor="oil">Essential Oil Cost (NPR)</label>
            <input id="oil" type="number" step="any" value={oil} onChange={e => setOil(e.target.value)} required placeholder="e.g. 200" 
              style={{ width: '100%', padding: '8px', background: '#fff', color: '#222', border: '1.5px solid #4a5568', borderRadius: 6, fontSize: 15, outlineColor: '#3182ce', marginBottom: 2 }} />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ color: '#222', fontWeight: 'bold', display: 'block', marginBottom: 4 }} htmlFor="vase">Vase Cost (NPR)</label>
            <input id="vase" type="number" step="any" value={vase} onChange={e => setVase(e.target.value)} required placeholder="e.g. 150" 
              style={{ width: '100%', padding: '8px', background: '#fff', color: '#222', border: '1.5px solid #4a5568', borderRadius: 6, fontSize: 15, outlineColor: '#3182ce', marginBottom: 2 }} />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ color: '#222', fontWeight: 'bold', display: 'block', marginBottom: 4 }} htmlFor="candles">Number of Candles Produced</label>
            <input id="candles" type="number" min="1" value={candles} onChange={e => setCandles(e.target.value)} required placeholder="e.g. 10" 
              style={{ width: '100%', padding: '8px', background: '#fff', color: '#222', border: '1.5px solid #4a5568', borderRadius: 6, fontSize: 15, outlineColor: '#3182ce', marginBottom: 2 }} />
          </div>
          {error && <div style={{ color: '#e53e3e', fontWeight: 'bold', marginBottom: 8, textAlign: 'center', fontSize: 14 }}>{error}</div>}
          <button type="submit" 
            style={{ 
              width: '100%', 
              padding: '10px', 
              background: 'linear-gradient(90deg, #3182ce 60%, #4fd1c5 100%)', 
              color: '#fff', 
              border: 'none', 
              borderRadius: 8, 
              fontWeight: 'bold', 
              fontSize: 16, 
              marginTop: 6, 
              boxShadow: '0 2px 8px rgba(49,130,206,0.08)', 
              cursor: 'pointer', 
              transition: 'all 0.2s',
              '&:hover': {
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 12px rgba(49,130,206,0.15)'
              }
            }}>
            Calculate
          </button>
        </form>
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%',
        minHeight: '400px'
      }}>
        {result !== null ? (
          <div style={{ 
            fontWeight: 'bold',
            color: '#222',
            fontSize: 18,
            textAlign: 'center',
            background: 'rgba(230, 255, 250, 0.9)',
            borderRadius: 12,
            padding: 24,
            width: '100%',
            boxShadow: '0 4px 16px rgba(72,187,120,0.12)',
            border: '2px solid #4fd1c5'
          }}>
            <h3 style={{ marginBottom: 20, color: '#2b6cb0', fontSize: 26 }}>Results</h3>
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 20, color: '#2b6cb0' }}>Total Cost:</span>
              <div style={{ fontSize: 24, marginTop: 8 }}>{result.toLocaleString()} NPR</div>
            </div>
            {costPerCandle !== null && (
              <div>
                <span style={{ fontSize: 20, color: '#319795' }}>Cost per Candle:</span>
                <div style={{ fontSize: 24, marginTop: 8 }}>{costPerCandle.toLocaleString(undefined, { maximumFractionDigits: 2 })} NPR</div>
              </div>
            )}
          </div>
        ) : (
          <div style={{ 
            color: '#718096',
            fontSize: 18,
            textAlign: 'center',
            padding: 24,
            border: '2px dashed #cbd5e0',
            borderRadius: 12,
            background: 'rgba(255,255,255,0.7)',
            width: '100%'
          }}>
            <span role="img" aria-label="calculator" style={{ fontSize: 32, marginBottom: 12, display: 'block' }}>🧮</span>
            Enter values and click Calculate<br/>
            to see the results here
          </div>
        )}
      </div>
    </div>
  );
}

export default CandleCostCalculator;
