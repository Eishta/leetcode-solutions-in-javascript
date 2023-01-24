// There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.

// You are given a 0-indexed integer array nums of length n where nums[i] represents the value of the ith node. You are also given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.

// Remove two distinct edges of the tree to form three connected components. For a pair of removed edges, the following steps are defined:

// Get the XOR of all the values of the nodes for each of the three components respectively.
// The difference between the largest XOR value and the smallest XOR value is the score of the pair.
// For example, say the three components have the node values: [4,5,7], [1,9], and [3,3,3]. The three XOR values are 4 ^ 5 ^ 7 = 6, 1 ^ 9 = 8, and 3 ^ 3 ^ 3 = 3. The largest XOR value is 8 and the smallest XOR value is 3. The score is then 8 - 3 = 5.
// Return the minimum score of any possible pair of edge removals on the given tree.


// class Solution {
//     public:
//         int n, t;
//         vector<vector<int>> adj;
//         vector<int> a, xs, tin, tout;
        
//         void dfs(int u=0, int p=-1) {
//             tin[u]=t++;
//             xs[u]=a[u];
//             for (int v : adj[u])
//                 if (v!=p) {
//                     dfs(v, u);
//                     xs[u]^=xs[v];
//                 }
//             tout[u]=t++;
//         }
        
//         bool ia(int u, int v) {
//             return tin[u]<=tin[v]&&tout[v]<=tout[u];
//         }
        
//         int minimumScore(vector<int>& nums, vector<vector<int>>& edges) {
//             n=nums.size();
//             a=nums;
//             adj.resize(n);
//             for (auto x : edges) {
//                 int u=x[0], v=x[1];
//                 adj[u].push_back(v);
//                 adj[v].push_back(u);
//             }
//             t=0;
//             xs.resize(n);
//             tin.resize(n);
//             tout.resize(n);
//             //cout << "OK1" << endl;
//             dfs();
//             //cout << "OK " << endl;
//             int ans=INT_MAX;
//             for (int i=1; i<n; ++i) {
//                 for (int j=i+1; j<n; ++j) {
//                     int u=i, v=j;
//                     if (ia(u, v)||ia(v, u)) {
//                         if (ia(v, u))
//                             swap(u, v);
//                         int a=xs[v], b=xs[u]^xs[v], c=xs[0]^xs[u];
//                         ans=min(ans, max({a, b, c})-min({a, b, c}));
//                     } else {
//                         int a=xs[u], b=xs[v], c=xs[0]^xs[u]^xs[v];
//                         ans=min(ans, max({a, b, c})-min({a, b, c}));
//                     }
//                 }
//             }
//             return ans;
//         }
//     };
    