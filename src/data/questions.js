const questions = [
  // Previous questions (1-10) go here...

  {
    id: 1,
    title: "Two sum",
    videoLink: "https://youtu.be/xfOU2SuZsKc?si=OPoiTxUL5GL5PvoI",
    code: `function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1, second = 2;
  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }
  return second;
}`
  },
  {
    id: 2,
    title: "Best Time to Buy & Sell Stock ",
    videoLink: "https://youtu.be/I9klO0Z20O0?si=wj5OQ6y-675ufu6P",
    code: `function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`
  },
  {
    id: 3,
    title: "Contains Duplicate",
    videoLink: "https://youtu.be/a42HzvnQjds?si=jbvZuCdGml1RRXSF",
    code: `function lengthOfLIS(nums) {
  const dp = [];
  for (let num of nums) {
    let left = 0, right = dp.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (dp[mid] < num) left = mid + 1;
      else right = mid;
    }
    dp[left] = num;
  }
  return dp.length;
}`
  },
  {
    id: 4,
    title: "Product of Array Except Self",
    videoLink: "https://youtu.be/fMROT89Gtko?si=UoKZlfYK-p114H1c",
    code: `function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}`
  },
  {
    id: 5,
    title: "Maximum Subarrays",
    videoLink: "https://youtu.be/8J3TicCYLJQ?si=tFdbJ7M6Fvm4AO_z",
    code: `function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}`
  },
  {
    id: 6,
    title: "Maximum Product Subarrays",
    videoLink: "https://youtu.be/oYiGQmkqbO0?si=06Mzw7zvDAlBEoKK",
    code: `function combinationSum(candidates, target) {
  const result = [];
  function backtrack(start, path, sum) {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, sum + candidates[i]);
      path.pop();
    }
  }
  backtrack(0, [], 0);
  return result;
}`
  },
  {
    id: 7,
    title: "Find Minimum in rotated subarray",
    videoLink: "https://youtu.be/nR6maL4Abq4?si=bGwDurrq7VzHk9vv",
    code: `function rob(nums) {
  let prev1 = 0, prev2 = 0;
  for (let num of nums) {
    const temp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = temp;
  }
  return prev1;
}`
  },
  {
    id: 8,
    title: "Search in rotated sorted subarray",
    videoLink: "https://youtu.be/zCpGv4bytnM?si=9AJ4kC9pqsKJV5Xy",
    code: `function rob(nums) {
  if (nums.length === 1) return nums[0];
  return Math.max(robRange(nums, 0, nums.length - 2), robRange(nums, 1, nums.length - 1));
}

function robRange(nums, start, end) {
  let prev1 = 0, prev2 = 0;
  for (let i = start; i <= end; i++) {
    const temp = prev1;
    prev1 = Math.max(prev2 + nums[i], prev1);
    prev2 = temp;
  }
  return prev1;
}`
  },
  {
    id: 9,
    title: "3 Sum",
    videoLink: "https://youtu.be/E3zJBwsMxso?si=AsK6o_p_4-MTVYKa",
    code: `function numDecodings(s) {
  if (!s || s[0] === '0') return 0;
  let prev1 = 1, prev2 = 1;
  for (let i = 1; i < s.length; i++) {
    let temp = 0;
    if (s[i] !== '0') temp = prev1;
    const twoDigit = parseInt(s.substring(i - 1, i + 1));
    if (twoDigit >= 10 && twoDigit <= 26) temp += prev2;
    prev2 = prev1;
    prev1 = temp;
  }
  return prev1;
}`
  },
  {
    id: 10,
    title: "Container with most water",
    videoLink: "https://youtu.be/Db4Wo-sks9c?si=0F5SvHQDIhUPwD-A",
    code: `function uniquePaths(m, n) {
  const dp = Array(m).fill().map(() => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}`
  },
  // Continue adding more questions up to id: 75

  {
    id: 11,
    title: "Sum of two integers",
    videoLink: "https://youtu.be/9d146UvzrD8?si=8uIY0Y2_LsbQf4nP",
    code: `function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1, second = 2;
  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }
  return second;
}`
  },
  {
    id: 12,
    title: "Number of 1 bits",
    videoLink: "https://youtu.be/reGb78Tt7nw?si=IZZnQL1E0PsagFMd",
    code: `function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`
  },
  {
    id: 13,
    title: "Counting bits",
    videoLink: "https://youtu.be/U3bP-lYAmiU?si=SogJ8MfwRc7o9RLJ",
    code: `function lengthOfLIS(nums) {
  const dp = [];
  for (let num of nums) {
    let left = 0, right = dp.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (dp[mid] < num) left = mid + 1;
      else right = mid;
    }
    dp[left] = num;
  }
  return dp.length;
}`
  },
  {
    id: 14,
    title: "Missing Number",
    videoLink: "https://youtu.be/o6_IzTxVZY0?si=-OJDuQvOJgvUShL6",
    code: `function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}`
  },
  {
    id: 15,
    title: "Reverse bits",
    videoLink: "https://youtu.be/j1RITHQzTc0?si=ypEjD6EIY5rfECyX",
    code: `function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}`
  },
  {
    id: 16,
    title: "Climbing stairs",
    videoLink: "https://youtu.be/jO_ni-YEdHc?si=jKSiGz9Roqnk4lZ1",
    code: `function combinationSum(candidates, target) {
  const result = [];
  function backtrack(start, path, sum) {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, sum + candidates[i]);
      path.pop();
    }
  }
  backtrack(0, [], 0);
  return result;
}`
  },
  {
    id: 17,
    title: "Coin changer",
    videoLink: "https://youtu.be/5ueAPJs0Odc?si=umh1IY2Xy_KBAaoE",
    code: `function rob(nums) {
  let prev1 = 0, prev2 = 0;
  for (let num of nums) {
    const temp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = temp;
  }
  return prev1;
}`
  },
  {
    id: 18,
    title: "Longest increasing subsequence",
    videoLink: "https://youtu.be/zSH62RMe1CI?si=t0xE3_NSHjRnx1sY",
    code: `function rob(nums) {
  if (nums.length === 1) return nums[0];
  return Math.max(robRange(nums, 0, nums.length - 2), robRange(nums, 1, nums.length - 1));
}

function robRange(nums, start, end) {
  let prev1 = 0, prev2 = 0;
  for (let i = start; i <= end; i++) {
    const temp = prev1;
    prev1 = Math.max(prev2 + nums[i], prev1);
    prev2 = temp;
  }
  return prev1;
}`
  },
  {
    id: 19,
    title: "Longest common subsequence",
    videoLink: "https://youtu.be/w1-pTzwSMI8?si=WiKa_SgQx--wFHD7",
    code: `function numDecodings(s) {
  if (!s || s[0] === '0') return 0;
  let prev1 = 1, prev2 = 1;
  for (let i = 1; i < s.length; i++) {
    let temp = 0;
    if (s[i] !== '0') temp = prev1;
    const twoDigit = parseInt(s.substring(i - 1, i + 1));
    if (twoDigit >= 10 && twoDigit <= 26) temp += prev2;
    prev2 = prev1;
    prev1 = temp;
  }
  return prev1;
}`
  },
  {
    id: 20,
    title: "Word Break",
    videoLink: "https://youtu.be/Qy_R8RU9WbQ?si=spatZBrC7RR8f4QU",
    code: `function uniquePaths(m, n) {
  const dp = Array(m).fill().map(() => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}`
  },
  // Continue adding more questions up to id: 75
  {
    id: 21,
    title: "Combination sum",
    videoLink: "https://youtu.be/R4Lh0gpK5bE?si=daxYUFNYKV4LX8rP",
    code: `function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1, second = 2;
  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }
  return second;
}`
  },
  {
    id: 22,
    title: "House robber",
    videoLink: "https://youtu.be/9KzuxEMIG6U?si=6KxP2_qOs3Vn3d1b",
    code: `function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`
  },
  {
    id: 23,
    title: "House RObber 2",
    videoLink: "https://youtu.be/o1OUiZFr3No?si=1zi_mzyh_Lca5RZE",
    code: `function lengthOfLIS(nums) {
  const dp = [];
  for (let num of nums) {
    let left = 0, right = dp.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (dp[mid] < num) left = mid + 1;
      else right = mid;
    }
    dp[left] = num;
  }
  return dp.length;
}`
  },
  {
    id: 24,
    title: "unique paths",
    videoLink: "https://youtu.be/1n1IXgmgBgw?si=7YNlHVap11Iqpy8u",
    code: `function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}`
  },
  {
    id: 25,
    title: "Jump game",
    videoLink: "https://youtu.be/1n1IXgmgBgw?si=xXX3kGdyH3bI7AHQ",
    code: `function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}`
  },
  {
    id: 26,
    title: "Clone graph",
    videoLink: "https://youtu.be/DPLFwSvxzY0?si=ByzlVpMe50kzQOLl",
    code: `function combinationSum(candidates, target) {
  const result = [];
  function backtrack(start, path, sum) {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, sum + candidates[i]);
      path.pop();
    }
  }
  backtrack(0, [], 0);
  return result;
}`
  },
  {
    id: 27,
    title: "Pacific atlantic water flow",
    videoLink: "https://youtu.be/zkX1Bq0pncA?si=EdnXWWeUOXEeQq-j",
    code: `function rob(nums) {
  let prev1 = 0, prev2 = 0;
  for (let num of nums) {
    const temp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = temp;
  }
  return prev1;
}`
  },
  {
    id: 28,
    title: "Course Schedule",
    videoLink: "https://youtu.be/cDTAANkwAAY?si=an78qGWQ4Nhdq6Jm",
    code: `function rob(nums) {
  if (nums.length === 1) return nums[0];
  return Math.max(robRange(nums, 0, nums.length - 2), robRange(nums, 1, nums.length - 1));
}

function robRange(nums, start, end) {
  let prev1 = 0, prev2 = 0;
  for (let i = start; i <= end; i++) {
    const temp = prev1;
    prev1 = Math.max(prev2 + nums[i], prev1);
    prev2 = temp;
  }
  return prev1;
}`
  },
  {
    id: 29,
    title: "NO. of islands",
    videoLink: "https://youtu.be/stdiaOeW-Ws?si=-hKwX4nhvMcFAvKn",
    code: `function numDecodings(s) {
  if (!s || s[0] === '0') return 0;
  let prev1 = 1, prev2 = 1;
  for (let i = 1; i < s.length; i++) {
    let temp = 0;
    if (s[i] !== '0') temp = prev1;
    const twoDigit = parseInt(s.substring(i - 1, i + 1));
    if (twoDigit >= 10 && twoDigit <= 26) temp += prev2;
    prev2 = prev1;
    prev1 = temp;
  }
  return prev1;
}`
  },
  {
    id: 30,
    title: "Alien Dictionory",
    videoLink: "https://youtu.be/UZux7jfsq-4?si=swVzx-1Zpxyu_IlI",
    code: `function uniquePaths(m, n) {
  const dp = Array(m).fill().map(() => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}`
  },
  // Continue adding more questions up to id: 75
];






export default questions;
