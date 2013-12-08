package com.pmsystem.action.pj;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;
import com.pmsystem.model.fr.Staff;
import com.pmsystem.model.pj.Project;
import com.pmsystem.service.pj.ProjectManageService;
import com.pmsystem.service.pj.StaffManageService;

public class StaffManageAction extends ActionSupport {
	
	private Staff staff;
	private Map<String, Object> jsonMap;
	private StaffManageService staffManageService;
	private boolean success;
	
	private String id;
	private List<Staff> staffs;
	private int totalCount;
	private int start;
	private int limit;
	
	public StaffManageAction() {
		jsonMap = new HashMap<String, Object>();
	}
	
	public String addStaff() throws UnsupportedEncodingException{
		//staff.setId(URLEncoder.encode(staff.getId(), "UTF-8"));
		//staff.setName(URLEncoder.encode(staff.getName(), "UTF-8"));
		//staff.setName(URLEncoder.encode(staff.getName(), "UTF-8"));
		System.out.println("name a: " + staff.getId());
		System.out.println("desc a: " + staff.getName());
		if(staffManageService == null){
			System.out.println("staffManageService == null");
		}
		staffManageService.addStaff(staff);
		jsonMap.put("success", true);
		return SUCCESS;
	}
	
	public String findAllStaff(){
		jsonMap.clear();
		if(staffManageService.getAllStaffs(limit, start) != null){
			staffs = staffManageService.getAllStaffs(limit, start);
			totalCount = staffManageService.getCount();
			jsonMap.put("staffs", staffs);
			jsonMap.put("totalCount", totalCount);
			jsonMap.put("success", true);
		}
		else
			jsonMap.put("success", false);
		return SUCCESS;
	}
	
	public String deleteStaff() {
		jsonMap.clear();
		if(staffManageService.deleteStaff(id) == null){
			
		}
		jsonMap.put("success", true);
		return SUCCESS;
	}

	public Staff getStaff() {
		return staff;
	}

	public void setStaff(Staff staff) {
		this.staff = staff;
	}

	public Map<String, Object> getJsonMap() {
		return jsonMap;
	}

	public void setJsonMap(Map<String, Object> jsonMap) {
		this.jsonMap = jsonMap;
	}

	public StaffManageService getStaffManageService() {
		return staffManageService;
	}

	public void setStaffManageService(StaffManageService staffManageService) {
		this.staffManageService = staffManageService;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public List<Staff> getStaffs() {
		return staffs;
	}

	public void setStaffs(List<Staff> staffs) {
		this.staffs = staffs;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}
	
	
	
}
