
import java.util.Scanner;

public class Update extends Check{
	
	// for pass data to Check constructor
	public Update(String port, String databaseName, String userName, String password) {
		super(port, databaseName, userName, password);
	}

	// main method for update
	public void mainUpdate() {
		Scanner in = new Scanner(System.in);
		 
		boolean outerLoop = true;
		while(outerLoop) {
			System.out.println("\n---------------------[Update]---------------------");
			System.out.println("\n(1) update employee");
			System.out.println("(0) Exit");
			System.out.print("Enter option: ");
			int num = in.nextInt();
			Base.LoadingMessage();
			
			if(num == 1) {
				System.out.print("\nEnter employee ID: ");
				String id = in.next();
				String prviousID = id;
				int checkNowrong = 1;
				if(checkID(id)) {
					
					boolean innerLoop = true;
					while(innerLoop) {
						String nameColumn = "";
						String value = "";
						String table = "";
						String pID = "";
						String EID = "";
						System.out.println("\nWhat your Change in ID " + id );
						System.out.println("(1) employee ID");
						System.out.println("(2) first name");
						System.out.println("(3) last name");
						System.out.println("(4) job title");
						
						System.out.println("(5) Date Of Birth");
						System.out.println("(6) Date Of Joined");
						System.out.println("(7) Email");
						System.out.println("(8) Salary");
						
						System.out.println("(9) Phone Number");
						System.out.println("(10) DoorNo");
						System.out.println("(11) StreetName");
						System.out.println("(12) Area");
						System.out.println("(13) Pincode");
						System.out.println("(14) District");
						System.out.println("(15) State");
						
						
						System.out.println("(16) DependentName");
						System.out.println("(17) Relationship");
						System.out.println("(18) DOB");
						System.out.println("(19) ContactNumber");

						System.out.println("(0) exit (no update)");
						System.out.print("Enter option: ");
						int op = in.nextInt();
						
						if(op == 1) {
							nameColumn = "EID";
							System.out.print("Enter new ID: ");
							 EID = in.next();
							if(checkID(EID) == false) {
								System.out.println("\n*Message: ID not  exist");
							}
							else
								value = qouteMark(EID);
							id = EID;
							table="employee";
							
						}
						else if(op == 2) {
							nameColumn = "firstName";
							System.out.print("Enter first Name: ");
							value = qouteMark(in.next());
							table="employee";
						}
						else if(op == 3) {
							nameColumn = "lastName";
							System.out.print("Enter last Name: ");
							value = qouteMark(in.next());
							table="employee";
						}
						else if(op == 4) {
							nameColumn = "jobTitle";
							System.out.print("Enter job Title: ");
							value = qouteMark(in.next());
							table="employee";
						}
						else if(op == 5) {
							checkNowrong = 0;
							nameColumn = "DOB";
							System.out.print("Enter birthday(YYYY-MM-DD): ");
							String date = in.next();
							if(checkDate(date)) {
								value = qouteMark(date);
								checkNowrong = 1;
								table="employee";
							}
							else
								System.out.println("\n*Message: date is wrong, again.");
						}
						else if(op == 6) {
							checkNowrong = 0;
							nameColumn = "DOJ";
							System.out.print("Enter birthday(YYYY-MM-DD): ");
							String date = in.next();
							if(checkDate(date)) {
								value = qouteMark(date);
								checkNowrong = 1;
								table="employee";
							}
							else
								System.out.println("\n*Message: date is wrong, again.");
						}
						else if(op == 7) {
							checkNowrong = 0;
							nameColumn = "email";
							System.out.print("Enter email: ");
							String email = in.next();
							if(checkEmail(email) == false) {
								value = qouteMark(email);
								checkNowrong = 1;
								table="employee";
							}
							else
								System.out.println("\n*Message: email is exist, again.");
						}
						else if(op == 8) {
							checkNowrong = 0;
							nameColumn = "salary";
							System.out.print("Enter Salary: ");
							String salary = in.next();
							table="employee";
							
								value = qouteMark(salary);
								checkNowrong = 1;
					
						}
						
						
						
						else if(op == 9) {
							checkNowrong = 0;
							nameColumn = "phoneNumber";
							
							System.out.print("Enter Employee ID: ");
							EID = in.next();
							if(checkID(EID) == false) {
								System.out.println("\n*Message: EID is exist");
							}
							else {
								
								System.out.print("Enter Employee's Phone Id");
								pID = in.next();
								System.out.print("Enter phoneNumber: ");
								String phonenumber = in.next();
								if(checkPhone(phonenumber) == false) {
									value = qouteMark(phonenumber);
									checkNowrong = 1;
									table = "employeeContactDetails";
								}
								else
									System.out.println("\n*Message: phone number is exist, again.");
							}
							
						}
						else if(op == 10) {
							checkNowrong = 0;
							nameColumn = "doorNo";
							
							System.out.print("Enter Employee ID: ");
							EID = in.next();
							if(checkID(EID) == false) {
								System.out.println("\n*Message: EID is exist");
							}
							else {
								
								System.out.print("Enter Employee's Address Id: ");
								pID = in.next();
								System.out.print("Enter Door Number: ");
								String doorNo = in.next();
								
									value = qouteMark(doorNo);
									checkNowrong = 1;
									table = "employeeAddressDetails";
							}
							
						}
						else if(op == 11) {
							
								checkNowrong = 0;
								nameColumn = "streetName";
								
								System.out.print("Enter Employee ID: ");
								EID = in.next();
								if(checkID(EID) == false) {
									System.out.println("\n*Message: EID is exist");
								}
								else {
									
									System.out.print("Enter Employee's Address Id: ");
									pID = in.next();
									System.out.print("Enter Street Name: ");
									String streetName = in.next();
									
										value = qouteMark(streetName);
										checkNowrong = 1;
										table = "employeeAddressDetails";
								}
							
						}
						else if(op == 12) {
							checkNowrong = 0;
							nameColumn = "area";
							
							System.out.print("Enter Employee ID: ");
							EID = in.next();
							if(checkID(EID) == false) {
								System.out.println("\n*Message: EID is exist");
							}
							else {
								
								System.out.print("Enter Employee's Address Id: ");
								pID = in.next();
								System.out.print("Enter Area: ");
								String area = in.next();
								
									value = qouteMark(area);
									checkNowrong = 1;
									table = "employeeAddressDetails";
							}
							
						}
						else if(op == 13) {
							checkNowrong = 0;
							nameColumn = "pincode";
							
							System.out.print("Enter Employee ID: ");
							EID = in.next();
							if(checkID(EID) == false) {
								System.out.println("\n*Message: EID is exist");
							}
							else {
								
								System.out.print("Enter Employee's Address Id: ");
								pID = in.next();
								System.out.print("Enter PinCode: ");
								String pincode = in.next();
								
									value = qouteMark(pincode);
									checkNowrong = 1;
									table = "employeeAddressDetails";
							}
							
						}
						else if(op == 14) {
							checkNowrong = 0;
							nameColumn = "district";
							
							System.out.print("Enter Employee ID: ");
							EID = in.next();
							if(checkID(EID) == false) {
								System.out.println("\n*Message: EID is exist");
							}
							else {
								
								System.out.print("Enter Employee's Address Id: ");
								pID = in.next();
								System.out.print("Enter District: ");
								String district = in.next();
								
									value = qouteMark(district);
									checkNowrong = 1;
									table = "employeeAddressDetails";
							}
							
						}
						else if(op == 15) {
							checkNowrong = 0;
							nameColumn = "state";
							
							System.out.print("Enter Employee ID: ");
							EID = in.next();
							if(checkID(EID) == false) {
								System.out.println("\n*Message: EID is exist");
							}
							else {
								
								System.out.print("Enter Employee's Address Id: ");
								pID = in.next();
								System.out.print("Enter state: ");
								String state = in.next();
								
									value = qouteMark(state);
									checkNowrong = 1;
									table = "employeeAddressDetails";
							}
							
						}
						else if(op == 16) {
							checkNowrong = 0;
							nameColumn = "dependentName";
							
							System.out.print("Enter Employee ID: ");
							EID = in.next();
							if(checkID(EID) == false) {
								System.out.println("\n*Message: EID is exist");
							}
							else {
								
								System.out.print("Enter Employee's Dependent Id: ");
								pID = in.next();
								System.out.print("Enter Dependent Name: ");
								String dependentName = in.next();
								
									value = qouteMark(dependentName);
									checkNowrong = 1;
									table = "employeeDependents";
								
							}
							
						}
						else if(op == 17) {
							checkNowrong = 0;
							nameColumn = "relationship";
							
							System.out.print("Enter Employee ID: ");
							EID = in.next();
							if(checkID(EID) == false) {
								System.out.println("\n*Message: EID is exist");
							}
							else {
								
								System.out.print("Enter Employee's Dependent Id: ");
								pID = in.next();
								System.out.print("Enter Dependent Relationship: ");
								String relationship = in.next();
								
									value = qouteMark(relationship);
									checkNowrong = 1;
									table = "employeeDependents";
								
							}
							
						}
						else if(op == 18) {
							checkNowrong = 0;
							nameColumn = "dob";
							
							System.out.print("Enter Employee ID: ");
							EID = in.next();
							if(checkID(EID) == false) {
								System.out.println("\n*Message: EID is exist");
							}
							else {
								
								System.out.print("Enter Employee's Dependent Id: ");
								pID = in.next();
								System.out.print("Enter Dependent DOB: ");
								String dob = in.next();
								
									value = qouteMark(dob);
									checkNowrong = 1;
									table = "employeeDependents";
								
							}
							
						}
						else if(op == 19) {
							checkNowrong = 0;
							nameColumn = "contactNumber";
							
							System.out.print("Enter Employee ID: ");
							EID = in.next();
							if(checkID(EID) == false) {
								System.out.println("\n*Message: EID is exist");
							}
							else {
								
								System.out.print("Enter Employee's Dependent Id: ");
								pID = in.next();
								System.out.print("Enter Dependent Contact Number: ");
								String contactNumber = in.next();
								
									value = qouteMark(contactNumber);
									checkNowrong = 1;
									table = "employeeDependents";
								
							}
							
						}
						
						
						else if(op == 0) {
							checkNowrong = 0;
							innerLoop = false;	
						}	
						else{
							checkNowrong = 0;
							innerLoop = true;	
						}
							
						// check if don't have any wrong in data if no wrong update , else no update
						if(checkNowrong == 1) {
							if(table=="employee") {
								
								update("employee",nameColumn,prviousID,value);
							}else if(table=="employeeAddressDetails") {
								
								update("employeeAddressDetails",nameColumn,prviousID,pID,value);
							}else if(table=="employeeContactDetails") {
								
								update("employeeContactDetails",nameColumn,prviousID,pID,value);
							}else if(table=="employeeDependents") {
								
								update("employeeDependents",nameColumn,prviousID,pID,value);
							}
							
							
							
							System.out.println("\n#Done");
						}
						prviousID = id;
					}
				}
				else
					System.out.println("\n*Message: employee dosen't exist");
			}	
			else if(num == 0)
				outerLoop = false;
			else
				outerLoop = true;			
		}
	}
	
	// Process for update
	private void update(String tableName, String column,String id ,  String value ) {
		try {
			String query = "update " + tableName + " set " + column + " = " + value + " where Eid = " + qouteMark(id);
			connect.prepareStatement(query).executeUpdate();  
		}
		catch(Exception ex) { ex.getStackTrace(); }
	}
	private void update(String tableName, String column,String id ,String phId,  String value ) {
		try {
			String query = "update " + tableName + " set " + column + " = " + value + " where eId = " + qouteMark(id)+"&& id = "+phId;
			connect.prepareStatement(query).executeUpdate();  
		}
		catch(Exception ex) { ex.getStackTrace(); }
	}
	
}

