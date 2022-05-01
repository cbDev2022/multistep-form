import React, { Component } from 'react'

export class AddSpecials extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values } = this.props;
        
    
    return (
        <div>
        <h1>Enter the title for each special collection and choose a date and date format</h1>
        <h3>Enter Title, Choose Date and Date Format for each special:</h3>
        <input placeholder="Enter Title Here" type="text" name="account" required autoComplete='off' />
            <label htmlFor='options'>Date Format</label>
                <select>
                    <option></option>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
            <label htmlFor='options'>Month</label>
                <select>
                    <option></option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
                <label htmlFor='options'>Day</label>
                <select>
                    <option></option>   
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </select>
                <label htmlFor='options'>Year</label>
                <select>
                    <option></option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
                <br></br>

                <input placeholder="Enter Title Here" type="text" name="account" required autoComplete='off' />
            <label htmlFor='options'>Date Format</label>
                <select>
                    <option></option>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
            <label htmlFor='options'>Month</label>
                <select>
                    <option></option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
                <label htmlFor='options'>Day</label>
                <select>
                    <option></option>   
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </select>
                <label htmlFor='options'>Year</label>
                <select>
                    <option></option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
                <br></br>

                <input placeholder="Enter Title Here" type="text" name="account" required autoComplete='off' />
            <label htmlFor='options'>Date Format</label>
                <select>
                    <option></option>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
            <label htmlFor='options'>Month</label>
                <select>
                    <option></option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
                <label htmlFor='options'>Day</label>
                <select>
                    <option></option>   
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </select>
                <label htmlFor='options'>Year</label>
                <select>
                    <option></option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
                <br></br>

                <input placeholder="Enter Title Here" type="text" name="account" required autoComplete='off' />
            <label htmlFor='options'>Date Format</label>
                <select>
                    <option></option>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
            <label htmlFor='options'>Month</label>
                <select>
                    <option></option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
                <label htmlFor='options'>Day</label>
                <select>
                    <option></option>   
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </select>
                <label htmlFor='options'>Year</label>
                <select>
                    <option></option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
                <br></br>

                <input placeholder="Enter Title Here" type="text" name="account" required autoComplete='off' />
            <label htmlFor='options'>Date Format</label>
                <select>
                    <option></option>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
            <label htmlFor='options'>Month</label>
                <select>
                    <option></option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
                <label htmlFor='options'>Day</label>
                <select>
                    <option></option>   
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </select>
                <label htmlFor='options'>Year</label>
                <select>
                    <option></option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
                <br></br>
                
                <div>
                <h2>When you are finished, click "Next"</h2>
            </div>

        <div className="footer">
                <button onClick={this.continue}>Next</button>
            </div>
    </div>
    )
  }
}

export default AddSpecials
