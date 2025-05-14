namespace BlogAppBackendServices.Dto;
using System;

public class ProfileDto
{
    public required string userId { get; set; }
    public required string nickName { get; set; }
}