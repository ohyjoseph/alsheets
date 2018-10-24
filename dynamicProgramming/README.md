Dynamic Programming - gradually build up to final result by storing intermediate steps.
  Fibonacci like - when finite number of previous values consistently sum up to later values AND order matters AND CAN use values more than once
    e.g. [1,2] 1,1,2 considered different from 1,2,1
  CoinSums like - when finite number of previous values consistently sum up to later values AND order doesn’t matter AND CAN use values more than once
    e.g. [1,2] 1,1,2 considered same as 1,2,1
  Knapsack01 like - when finite number of previous values consistently sum up to later values AND order doesn’t matter AND CANNOT use values more than once
    e.g. [1,2] 1,1,2 not valid because 1 used more than once