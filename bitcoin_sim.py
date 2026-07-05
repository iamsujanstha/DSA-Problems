import pandas as pd
import numpy as np

def simulate_bitcoin_prices(days=60, initial_price=50000.0, mu=0.001, sigma=0.04):
    """
    Simulates daily Bitcoin prices using Geometric Brownian Motion.
    mu: Expected return (drift)
    sigma: Volatility
    """
    np.random.seed(20)  # For reproducibility to generate cross events
    prices = [initial_price]
    for _ in range(1, days):
        dt = 1 # 1 day
        shock = np.random.normal(0, 1)
        price = prices[-1] * np.exp((mu - 0.5 * sigma**2) * dt + sigma * np.sqrt(dt) * shock)
        prices.append(price)
    return prices

def main():
    days = 60
    initial_price = 50000.0

    # Simulate 60 days of Bitcoin price data
    prices = simulate_bitcoin_prices(days, initial_price)

    # Create a DataFrame
    df = pd.DataFrame({
        'Day': range(1, days + 1),
        'Price': prices
    })

    # Calculate 7-day and 30-day Moving Averages
    df['7_day_MA'] = df['Price'].rolling(window=7).mean()
    df['30_day_MA'] = df['Price'].rolling(window=30).mean()

    # Implement Golden Cross trading algorithm & Portfolio Tracking
    initial_balance = 10000.0
    cash = initial_balance
    btc_held = 0.0

    print("Daily Ledger:")
    print("-" * 85)

    for i in range(len(df)):
        day = df.loc[i, 'Day']
        price = df.loc[i, 'Price']
        ma7 = df.loc[i, '7_day_MA']
        ma30 = df.loc[i, '30_day_MA']

        # Default action
        action = "HOLD"

        # Need previous day's MAs to check for crosses
        if (i > 0 and not pd.isna(ma7) and not pd.isna(ma30) and
            not pd.isna(df.loc[i-1, '7_day_MA']) and not pd.isna(df.loc[i-1, '30_day_MA'])):

            prev_ma7 = df.loc[i-1, '7_day_MA']
            prev_ma30 = df.loc[i-1, '30_day_MA']

            # Golden Cross: 7-day MA crosses above 30-day MA
            if prev_ma7 <= prev_ma30 and ma7 > ma30:
                if cash > 0:
                    btc_held = cash / price
                    cash = 0.0
                    action = "BUY "

            # Death Cross: 7-day MA crosses below 30-day MA
            elif prev_ma7 >= prev_ma30 and ma7 < ma30:
                if btc_held > 0:
                    cash = btc_held * price
                    btc_held = 0.0
                    action = "SELL"

        portfolio_value = cash + (btc_held * price)

        # Print daily ledger
        ma7_str = f"{ma7:.2f}" if not pd.isna(ma7) else "N/A"
        ma30_str = f"{ma30:.2f}" if not pd.isna(ma30) else "N/A"
        print(f"Day {int(day):02d} | Price: ${price:8.2f} | 7d MA: {ma7_str:>8} | 30d MA: {ma30_str:>8} | Action: {action} | Port. Value: ${portfolio_value:.2f}")

    print("-" * 85)

    # Final portfolio performance
    final_value = cash + (btc_held * df['Price'].iloc[-1])
    profit = final_value - initial_balance
    profit_pct = (profit / initial_balance) * 100

    print("\nFinal Portfolio Performance:")
    print(f"Initial Balance: ${initial_balance:.2f}")
    print(f"Final Value:     ${final_value:.2f}")
    print(f"Profit/Loss:     ${profit:.2f} ({profit_pct:.2f}%)")

if __name__ == "__main__":
    main()
