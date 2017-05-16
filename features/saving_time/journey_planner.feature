Feature: Journey Planner

  As a commuter,
   I’d like to know the fastest route between two stations,
   So that I get to my destination as quickly as possible

  Scenario: Connie looks for the next train

    Given Jubilee line trains from Stratford leave Canary Wharf at 16:59, 17:01, 17:03, 17:09
     When Connie wants to travel from Canary Wharf to Waterloo Underground Station at 17:00, avoiding travelling by Bus, National Rail
     Then she should be told about the trains departing at 16:59, 17:01, 17:03

